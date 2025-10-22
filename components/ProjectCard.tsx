import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-2">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-700 transition-colors">
              <i className="fab fa-github fa-2x"></i>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-700 transition-colors">
              <i className="fas fa-external-link-alt fa-2x"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;