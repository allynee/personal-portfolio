import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">My Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {SKILLS.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span key={skill.name} className="bg-indigo-100 text-indigo-800 text-md font-medium px-4 py-2 rounded-md flex items-center gap-2">
                  {skill.iconClass && <i className={`${skill.iconClass} text-xl`}></i>}
                  {skill.iconUrl && <img src={skill.iconUrl} alt={`${skill.name} logo`} className="w-5 h-5 object-contain" />}
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;