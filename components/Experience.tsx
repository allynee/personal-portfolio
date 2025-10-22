import React from 'react';
import { EXPERIENCES } from '../constants';
import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Work Experience</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {EXPERIENCES.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;