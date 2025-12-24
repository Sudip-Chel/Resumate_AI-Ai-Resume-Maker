import React, { useContext, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const emptySkill = { name: '', rating: 0 };

function Skills() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const { resumeId } = useParams();
  const [loading, setLoading] = useState(false);

  const [skillsList, setSkillsList] = useState([emptySkill]);
  const [initialised, setInitialised] = useState(false);

  // 1) Load from context once (or when it first arrives)
  useEffect(() => {
    const incoming = Array.isArray(resumeInfo?.skills)
      ? resumeInfo.skills
      : [];

    // Only update local state if it is genuinely different
    if (!initialised) {
      if (incoming.length > 0) {
        setSkillsList(incoming);
      } else {
        setSkillsList([emptySkill]);
      }
      setInitialised(true);
    }
  }, [resumeInfo?.skills, initialised]);

  // 2) After initial load, push local changes to context (for preview)
  useEffect(() => {
    if (!initialised) return; // avoid running during initial sync

    setResumeInfo(prev => ({
      ...(prev || {}),
      skills: skillsList,
    }));
  }, [skillsList, initialised, setResumeInfo]);

  const handleChange = (index, name, value) => {
    setSkillsList(prev => {
      const copy = [...prev];
      copy[index] = {
        ...(copy[index] || { ...emptySkill }),
        [name]: value,
      };
      return copy;
    });
  };

  const addNewSkill = () => {
    setSkillsList(prev => [...prev, { ...emptySkill }]);
  };

  const removeSkill = () => {
    setSkillsList(prev => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const onSave = () => {
    setLoading(true);

    const data = {
      data: {
        skills: skillsList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(resumeId, data)
      .then(resp => {
        console.log(resp);
        toast('Details updated !');
      })
      .catch(() => {
        toast('Server Error, Try again!');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between mb-2 border rounded-lg p-3"
          >
            <div className="flex-1 mr-4">
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                value={item.name}
                onChange={e => handleChange(index, 'name', e.target.value)}
              />
            </div>

            <Rating
              style={{ maxWidth: 120 }}
              value={Number(item.rating) || 0}
              onChange={v => handleChange(index, 'rating', v)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={addNewSkill}
            className="text-primary"
          >
            + Add More Skill
          </Button>
          <Button
            variant="outline"
            onClick={removeSkill}
            className="text-primary"
            disabled={skillsList.length <= 1}
          >
            - Remove
          </Button>
        </div>

        <Button disabled={loading} onClick={onSave}>
          {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
