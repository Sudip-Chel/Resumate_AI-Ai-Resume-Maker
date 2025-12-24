import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailsPreview from './preview/PersonalDetailsPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

function ResumePreview() {
  const { resumeInfo } = useContext(ResumeInfoContext);

  const experienceList =
    resumeInfo?.experience || resumeInfo?.Experience || [];
  const educationList = resumeInfo?.education || [];
  const skillsList = resumeInfo?.skills || [];

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor || '#000' }}
    >
      <PersonalDetailsPreview resumeInfo={resumeInfo} />
      <SummeryPreview resumeInfo={resumeInfo} />

      {/* Professional Experience */}
      {experienceList.length > 0 && (
        <ExperiencePreview resumeInfo={{ ...resumeInfo, experience: experienceList }} />
      )}

      {/* Education */}
      {educationList.length > 0 && (
        <EducationalPreview resumeInfo={resumeInfo} />
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <SkillsPreview resumeInfo={resumeInfo} />
      )}
    </div>
  );
}

export default ResumePreview;