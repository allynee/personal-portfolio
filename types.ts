import type React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  imageUrl: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface FunItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  details: {
    text: string;
    images: {
      url: string;
      caption: string;
    }[];
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement;
}

export interface Skill {
  name: string;
  iconClass?: string;
  iconUrl?: string;
}

export interface Skills {
  title: string;
  skills: Skill[];
}