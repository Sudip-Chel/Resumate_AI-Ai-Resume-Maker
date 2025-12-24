function SkillsPreview({ resumeInfo }) {
  const skills = resumeInfo?.skills || [];
  if (!skills.length) return null;

  const color = resumeInfo?.themeColor || '#000000'; // fallback to black

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color }}
      >
        Skills
      </h2>
      <hr style={{ borderColor: color }} />

      <div className="grid grid-cols-2 gap-3 my-4">
        {skills.map((skill, index) => {
          const rating = Number(skill?.rating) || 0;
          const widthPercent = Math.min(Math.max(rating * 20, 0), 100);

          return (
            <div key={index} className="flex items-center justify-between">
              <h2 className="text-xs">{skill?.name}</h2>
              <div className="h-2 bg-gray-200 w-32 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full"
                  style={{
                    backgroundColor: color,
                    width: `${widthPercent}%`,
                    transition: 'width 150ms ease-out',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsPreview;
