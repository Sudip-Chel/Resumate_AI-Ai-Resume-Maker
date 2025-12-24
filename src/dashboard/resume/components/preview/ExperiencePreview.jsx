function ExperiencePreview({ resumeInfo }) {
  const experienceList =
    resumeInfo?.experience || resumeInfo?.Experience || [];

  if (!experienceList.length) return null;

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {experienceList.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{ color: resumeInfo?.themeColor }}
          >
            {experience?.title}
          </h2>

          <h2 className="text-xs flex justify-between flex-wrap gap-1">
            <span>
              {experience?.companyName}
              {experience?.city ? `, ${experience.city}` : ''}
              {experience?.state ? `, ${experience.state}` : ''}
            </span>
            <span>
              {experience?.startDate} to{' '}
              {experience?.currentlyWorking ? 'Present' : experience?.endDate}
            </span>
          </h2>

          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery || '' }}
          />
        </div>
      ))}
    </div>
  );
}
export default ExperiencePreview;