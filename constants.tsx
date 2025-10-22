import React from 'react';
import type { Project, Experience, FunItem, SocialLink, Education, Skills } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Commercial Space Analysis Platform',
    description: "Built AWS ETL pipelines consolidating data from 7+ sources into a database of 220+ Singapore malls, facilitating Data-as-a-Service (DaaS) and clustering analysis. Selected as 'Best Solution' by PropertyGuru.",
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    tags: ['AWS', 'ETL', 'Python', 'Data Analysis'],
    // githubUrl: '#',
  },
  {
    id: 2,
    title: 'Choral Music to Sheet Music Converter',
    description: "Developed a novel music source-separation model, improving average signal-to-distortion ratio (SDR). Co-authored a paper accepted at RAFDA 2024 and published in Springer's Lecture Notes in AI Series.",
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Machine Learning', 'PyTorch', 'Research', 'Signal Processing'],
    // githubUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media Chatbot for Sales',
    description: "Built a generative-AI personalized assistant (FastAPI, LangChain, Redis, ChromaDB) with multi-turn conversational workflows. Achieved 1st runner-up among 287 teams in Singapore Airlines' global hackathon.",
    imageUrl: '/images/sia-hackathon.png',
    tags: ['Generative AI', 'LangChain', 'FastAPI', 'Hackathon'],
    // githubUrl: '#',
  },
];

export const EXPERIENCES: Experience[] = [
    {
        id: 1,
        title: 'Search Engines Teaching Assistant',
        company: 'Carnegie Mellon University, Pittsburgh, PA',
        period: 'Aug 2025 - Dec 2025',
        description: [
          'Serve as a teaching assistant for “Search Engines” under Prof. Jamie Callan, assisting with grading and holding consultation sessions.',
        ],
        imageUrl: '/images/cmu-logo.png',
    },
    {
        id: 2,
        title: 'Machine Learning Engineer Intern',
        company: 'ByteDance, San Jose, CA',
        period: 'May 2025 - Aug 2025',
        description: [
          'Developed a 7B LLM using PyTorch with SFT and RLHF to generate personalized ad targeting settings for TikTok Ads.',
          'Designed robust offline evaluation frameworks and human-in-the-loop testing to reduce hallucinations and improve quality.',
          'Researched LLM-based approaches for improving user embeddings and lifelong user behavior modeling.',
        ],
        imageUrl: '/images/bytedance.jpg',
    },
    {
        id: 3,
        title: 'Algorithm Engineer Intern',
        company: 'Shopee, Singapore',
        period: 'May 2024 - Aug 2024',
        description: [
          'Built personalized recommendation models using PyTorch for a customer service chatbot, increasing CTR by over 3%.',
          'Conducted large-scale hyperparameter tuning and optimization of attention-based models in production systems.',
          'Analyzed A/B test data using SQL, Pandas, and plotting libraries to extract actionable insights.',
        ],
        imageUrl: '/images/shopee.jpg',
    },
    {
        id: 4,
        title: 'AI Engineer Intern',
        company: 'Infocomm Media Development Authority, Singapore',
        period: 'Dec 2023 - Apr 2024',
        description: [
            'Built a summarization and question answering (QA) system for LawNet, Singapore\'s leading legal research portal.',
            'Improved summarization accuracy & latency for an in-house 13B LLM via multi-modal document processing and optimization.',
        ],
        imageUrl: '/images/imda.jpg',
    },
    {
        id: 5,
        title: 'Student Researcher',
        company: 'Singapore Management University, Singapore',
        period: 'Aug 2023 - Nov 2023',
        description: [
            'Researched continuous learning for virtual reality (VR) AI agents with Professor Tony Tang in RICELab.',
            'Built agents that learned from user interactions to generate increasingly complex and personalized VR content in Unity.',
        ],
        imageUrl: '/images/smu-pool.jpg',
    },
    {
        id: 6,
        title: 'AI Intern',
        company: 'Deloitte, Singapore',
        period: 'May 2023 - Aug 2023',
        description: [
            'Built a retrieval-augmented generation (RAG)-based personalized assistant with LangChain, automating >50% of compliance tasks.',
            'Presented to 300+ professionals across Southeast Asia; one of four interns firm-wide to receive the Deloitte Intern Impact Award.',
        ],
        imageUrl: '/images/deloitte.jpg',
    },
];

export const EDUCATION: Education[] = [
    {
        id: 1,
        institution: 'Carnegie Mellon University',
        degree: 'M.S. in Artificial Intelligence and Innovation',
        period: 'May 2026',
        details: [
            'GPA: 4.22/4.33',
            'Ranked 1st in cohort',
            'Selected coursework: Large Language Models, Deep Reinforcement Learning, Multimodal Machine Learning, Search Engines, Advanced Computer Vision, Advanced Natural Language Processing, Machine Learning in Production, Computer Systems, Deep Learning, Machine Learning',
        ],
    },
    {
        id: 2,
        institution: 'Singapore Management University',
        degree: 'B.S. in Information Systems; Major in Business Analytics',
        period: 'May 2024',
        details: [
            'GPA: 4.00/4.00',
            'Top Graduating Student in Information Systems',
        ],
    },
];

export const SKILLS: Skills[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'C#' },
      { name: 'Java' },
      { name: 'R' },
      { name: 'JavaScript' },
      { name: 'Go' },
    ],
  },
  {
    title: 'AI/ML Frameworks',
    skills: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'JAX' },
      { name: 'HuggingFace' },
      { name: 'scikit-learn' },
      { name: 'LangChain' },
      { name: 'vLLM' },
      { name: 'spaCy' },
    ],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'PySpark' },
      { name: 'Tableau' },
      { name: 'Scrapy' },
      { name: 'Hadoop' },
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: [
      { name: 'Docker' },
      { name: 'Streamlit' },
      { name: 'Linux' },
      { name: 'FastAPI' },
      { name: 'Redis' },
    ],
  },
];

export const FUN_ITEMS: FunItem[] = [
  {
    id: 1,
    name: 'Nature',
    description: 'Exploring trails and touching grass',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    details: {
      text: 'This page is still in progress...',
      // text: 'There\'s nothing quite like the feeling of reaching a summit after a long hike. It\'s my favorite way to disconnect from screens and reconnect with nature. I\'ve explored trails in the Rockies, the Sierras, and hope to hike in the Alps someday!',
      images: [
        {url: '/images/banff.jpg', caption: 'Banff, Calgary, Canada'},
        {url: '/images/white-sands.jpg', caption: 'White Sands National Park, New Mexico, USA'},
        {url: '/images/tauhara.jpg', caption: 'Mount Tauhara, Taupo, New Zealand'},
      ],
    },
  },
  {
    id: 2,
    name: 'Cooking',
    description: 'With confidence, not competence',
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1996&auto=format&fit=crop',
    details: {
      text: 'This page is still in progress...',
      // text: 'I love the creative process of cooking, from finding a new recipe to plating the final dish. My specialty is homemade pasta, but I also enjoy baking sourdough bread and trying out complex curry recipes. It\'s a delicious and rewarding hobby.',
      images: [
        {url: '/images/lobster-2.jpg', caption: 'Emperer Hirorito (After), Maine, USA'},
        {url: '/images/lobster-1.jpg', caption: 'Emperer Hirorito (Before), Maine, USA'},
      ],
    },
  },
  {
    id: 3,
    name: 'Others',
    description: 'Some other interesting stuff',
    imageUrl: '/images/cat2.png',
    details: {
      text: 'This page is still in progress...',
      // text: 'Beyond hiking and cooking, I enjoy film photography, playing the piano, and visiting art museums. These hobbies offer different ways to be creative and see the world from new perspectives.',
      images: [
        {url: '/images/aixsummit.jpeg', caption: 'Incredibly honored to have participated as a panelist at Asia Tech x Singapore 2024!'},
      ],
    },
  },
];


export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Resume', url: '/docs/Allyne_Resume.pdf', icon: <i className="fas fa-file-lines"></i> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/allyne-zhang/', icon: <i className="fab fa-linkedin"></i> },
    { name: 'GitHub', url: 'https://github.com/allynee', icon: <i className="fab fa-github"></i> },
    { name: 'ML Journal', url: 'https://t.me/+AAzNJfEl6BQ5ZmU1', icon: <i className="fab fa-telegram"></i> },
    { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=allynez@andrew.cmu.edu', icon: <i className="fas fa-envelope"></i> },
];