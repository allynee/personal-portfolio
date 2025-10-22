import React from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/20">
      <div className="md:w-2/5 flex-shrink-0">
        <img 
          src={experience.imageUrl} 
          alt={`${experience.company} logo`} 
          className="h-56 w-full object-cover md:h-full"
        />
      </div>
      
      <div className="p-6 flex flex-col w-full">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2 gap-2">
          <h3 className="font-bold text-indigo-900 text-xl">{experience.title}</h3>
          <p className="text-sm text-slate-500 font-medium flex-shrink-0">{experience.period}</p>
        </div>
        <p className="mb-4 text-md font-semibold text-slate-700">{experience.company}</p>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          {experience.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;