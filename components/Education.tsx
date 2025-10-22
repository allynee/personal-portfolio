import React from 'react';
import { EDUCATION } from '../constants';
import EducationItem from './EducationItem';

const Education: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {EDUCATION.map((edu) => (
          <EducationItem key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;