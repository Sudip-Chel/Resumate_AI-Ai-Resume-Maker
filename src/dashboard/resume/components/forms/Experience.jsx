import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

const emptyExperience = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummery: '',
};

function Experience() {
  const [experienceList, setExperienceList] = useState([emptyExperience]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [loadedFromContext, setLoadedFromContext] = useState(false);
  // 1) Load initial data from context (edit mode)
// 1) Load ONCE from context (no write back here)
  useEffect(() => {
    if (loadedFromContext) return;

    const existing = resumeInfo?.experience || resumeInfo?.Experience;
    if (Array.isArray(existing) && existing.length > 0) {
      setExperienceList(existing);
    } else {
      setExperienceList([emptyExperience]);
    }
    setLoadedFromContext(true);
  }, [resumeInfo?.experience, resumeInfo?.Experience, loadedFromContext]);

   // 2) Push local changes to context for preview (does NOT depend on resumeInfo)
  useEffect(() => {
    if (!loadedFromContext) return; // wait until initial load

    setResumeInfo(prev => ({
      ...(prev || {}),
      experience: experienceList,
      Experience: experienceList,
    }));
  }, [experienceList, loadedFromContext, setResumeInfo]);


  const updateField = (index, name, value) => {
    setExperienceList(prev => {
      const copy = [...prev];
      copy[index] = { ...(copy[index] || emptyExperience), [name]: value };
      return copy;
    });
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    updateField(index, name, value);
  };

  const handleRichTextEditor = (event, name, index) => {
    const html = event.target.value || '';
    updateField(index, name, html);
  };

  const addNewExperience = () => {
    setExperienceList(prev => [...prev, { ...emptyExperience }]);
  };

  const removeExperience = () => {
    setExperienceList(prev => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const onSave = () => {
    setLoading(true);

    const cleaned = experienceList.map(({ id, ...rest }) => rest);

    const data = {
      data: {
        experience: cleaned, // Strapi field name
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data)
      .then(res => {
        console.log(res);
        toast('Details updated!');
      })
      .catch(error => {
        console.error('Update error:', error?.response?.data || error);
        toast('Server Error, Try again!');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your previous job experience</p>

        <div>
          {experienceList.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg"
            >
              <div>
                <label className="text-xs">Position Title</label>
                <Input
                  name="title"
                  value={item?.title || ''}
                  onChange={e => handleChange(index, e)}
                />
              </div>
              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  name="companyName"
                  value={item?.companyName || ''}
                  onChange={e => handleChange(index, e)}
                />
              </div>
              <div>
                <label className="text-xs">City</label>
                <Input
                  name="city"
                  value={item?.city || ''}
                  onChange={e => handleChange(index, e)}
                />
              </div>
              <div>
                <label className="text-xs">State</label>
                <Input
                  name="state"
                  value={item?.state || ''}
                  onChange={e => handleChange(index, e)}
                />
              </div>
              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  value={item?.startDate || ''}
                  onChange={e => handleChange(index, e)}
                />
              </div>
              <div>
                <label className="text-xs">End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  value={item?.endDate || ''}
                  onChange={e => handleChange(index, e)}
                />
              </div>
              <div className="col-span-2">
                <RichTextEditor
                  index={index}
                  defaultValue={item?.workSummery || ''}
                  onRichTextEditorChange={e =>
                    handleRichTextEditor(e, 'workSummery', index)
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={addNewExperience}
              className="text-primary"
            >
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              onClick={removeExperience}
              className="text-primary"
              disabled={experienceList.length <= 1}
            >
              - Remove
            </Button>
          </div>
          <Button disabled={loading} onClick={onSave}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
