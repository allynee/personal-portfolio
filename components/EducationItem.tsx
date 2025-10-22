import React from 'react';
import type { Education } from '../types';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-bold text-indigo-900 text-xl">{education.degree}</h3>
        <p className="text-sm text-slate-500 font-medium">{education.period}</p>
      </div>
      <p className="mb-4 text-md font-semibold text-slate-700">{education.institution}</p>
      <ul className="list-disc list-inside text-slate-700 space-y-1">
        {education.details.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationItem;