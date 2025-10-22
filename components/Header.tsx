import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface HeaderProps {
  scrollToHero: () => void;
  sections: Section[];
  heroRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ scrollToHero, sections, heroRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id === 'hero' ? '' : entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToObserve = [heroRef, ...sections.map(s => s.ref)];
    
    elementsToObserve.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elementsToObserve.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections, heroRef]);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = (
    <>
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => handleNavClick(section.ref)}
          className={`px-4 py-2 hover:text-indigo-700 transition-colors ${activeSection === section.id ? 'text-indigo-700 font-semibold' : ''}`}
        >
          {section.label}
        </button>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-stone-100/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <button onClick={scrollToHero} className="text-2xl font-bold text-indigo-900">
          Allyne Zhang
        </button>
        <nav className="hidden md:flex items-center text-lg text-slate-800">
          {navLinks}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-stone-200">
          <nav className="flex flex-col items-center py-4 text-slate-800">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;