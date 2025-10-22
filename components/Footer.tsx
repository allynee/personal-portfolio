import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-slate-700">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-700 transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Allyne Zhang. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;