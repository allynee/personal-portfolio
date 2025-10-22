import React, { useRef } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Fun from './components/Hobbies';
import Footer from './components/Footer';
import FunPage from './components/FunPage';
import BackToTopButton from './components/BackToTopButton';
import { FUN_ITEMS } from './constants';

const App: React.FC = () => {
  const navigate = useNavigate();

  // Section refs for scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const funRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'experience', label: 'Experience', ref: experienceRef },
    { id: 'education', label: 'Education', ref: educationRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'skills', label: 'Skills', ref: skillsRef },
    { id: 'fun', label: 'Fun', ref: funRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFunItemClick = (itemName: string) => {
    navigate(`/fun/${itemName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-stone-100 font-sans leading-relaxed">
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Header
                scrollToHero={() => scrollToSection(heroRef)}
                sections={sections}
                heroRef={heroRef}
              />
              <main className="container mx-auto px-6 md:px-12 py-8">
                <div id="hero" ref={heroRef}><Hero /></div>
                <div id="experience" ref={experienceRef}><Experience /></div>
                <div id="education" ref={educationRef}><Education /></div>
                <div id="projects" ref={projectsRef}><Projects /></div>
                <div id="skills" ref={skillsRef}><Skills /></div>
                <div id="fun" ref={funRef}>
                  <Fun onItemClick={(item) => handleFunItemClick(item.name)} />
                </div>
              </main>
              <Footer />
              <BackToTopButton />
            </>
          }
        />

        {/* Fun pages route */}
        <Route path="/fun/:name" element={<FunPageWrapper />} />

        {/* Optional: fallback for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Separate wrapper so FunPage can pull URL param
const FunPageWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const funItem = FUN_ITEMS.find(
    (item) => item.name.toLowerCase() === (name ?? '').toLowerCase()
  );

  if (!funItem) return <NotFound />;

  return <FunPage item={funItem} onBack={() => navigate('/')} />;
};

// Simple 404 component (optional)
const NotFound: React.FC = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="text-lg text-slate-600 mb-6">Page not found.</p>
    <a href="/" className="text-indigo-600 hover:underline">
      Go back home
    </a>
  </div>
);

export default App;
