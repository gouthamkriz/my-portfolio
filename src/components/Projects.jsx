// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: '🤟 Sign Language Translator',
    description: 'Real-time hand gesture recognition system that translates sign language into text with 94%+ accuracy. Built using MediaPipe for hand tracking and LSTM networks for gesture classification.',
    tech: ['Python', 'MediaPipe', 'LSTM', 'OpenCV', 'TensorFlow'],
    github: 'https://github.com/gouthamkriz',
    demo: '#'
  },
  {
    title: '⚡ EV Charging App',
    description: 'Android application that helps users locate nearby EV charging stations and order food during charging sessions. Features real-time station availability and integrated payment systems.',
    tech: ['Android', 'Java', 'Google Maps API', 'Firebase', 'REST API'],
    github: 'https://github.com/gouthamkriz',
    demo: '#'
  },
  {
    title: '🤖 AI Chat Assistant',
    description: 'Intelligent chatbot built with natural language processing capabilities. Features context-aware conversations, sentiment analysis, and multi-language support.',
    tech: ['Python', 'Transformers', 'BERT', 'FastAPI', 'Docker'],
    github: 'https://github.com/gouthamkriz',
    demo: '#'
  },
  {
    title: '📊 Data Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization and business intelligence. Features automated reporting, predictive analytics, and customizable KPI tracking.',
    tech: ['Python', 'Power BI', 'Pandas', 'Plotly', 'SQL'],
    github: 'https://github.com/gouthamkriz',
    demo: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white bg-opacity-5 backdrop-blur p-6 rounded-2xl border border-white border-opacity-10 hover:translate-x-2 transform transition">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">{project.title}</h3>
              <p className="text-white text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-pink-600 bg-opacity-10 border border-pink-600 border-opacity-30 text-pink-400 px-3 py-1 rounded-full text-xs">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-pink-400 hover:text-pink-300 text-sm font-semibold" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github mr-1"></i> View Code
                </a>
                <a href={project.demo} className="text-pink-400 hover:text-pink-300 text-sm font-semibold" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
