import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center -mt-16">
      <div className="container mx-auto px-6 space-y-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg ring-4 ring-indigo-900/50 mx-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-indigo-900">Allyne Zhang</h1>
            <p className="mt-4 text-2xl md:text-3xl text-slate-700">Machine Learning Engineer</p>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-slate-800">
            AI graduate student at Carnegie Mellon University specializing in recommender systems, search, and NLP. Experienced in building scalable machine learning models for advertising, e-commerce, and legal technology applications.
          </p>
          <div className="flex justify-center items-center flex-wrap gap-4 pt-4">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-indigo-900 text-indigo-900 font-semibold hover:text-white py-2 px-6 border-2 border-indigo-900 rounded-full transition-colors duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;