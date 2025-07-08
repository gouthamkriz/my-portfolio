// src/components/Experience.jsx
import React from 'react';

const experiences = [
  {
    title: 'Junior Python Developer',
    company: 'Future Optima',
    duration: 'June 2024 - June 2025',
    description: `Developed robust backend modules using Python and FastAPI, contributing to scalable web applications. 
Collaborated with AI/data teams on automation projects and pipeline development, streamlining data processing workflows. 
Recognized for exceptional team contribution and problem-solving skills in resolving complex technical issues.`
  },
  {
    title: 'Data Science with AI Intern',
    company: 'Future Optima',
    duration: 'Early 2024',
    description: `Created predictive models using machine learning algorithms and automated business intelligence dashboards using Python. 
Worked on data preprocessing, feature engineering, and model optimization to improve prediction accuracy and business insights.`
  },
  {
    title: 'Cloud Intern',
    company: 'Spectrum Softtech',
    duration: '2022',
    description: `Successfully deployed a live web application using AWS cloud services. 
Gained hands-on experience with cloud infrastructure, containerization, and CI/CD pipelines. 
Learned best practices for scalable cloud architecture and DevOps methodologies.`
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-black text-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative bg-white bg-opacity-5 backdrop-blur p-6 rounded-2xl border border-white border-opacity-10 hover:translate-x-2 transform transition">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-2/3 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-full"></div>
              <h3 className="text-xl font-semibold text-pink-400 mb-1">{exp.title}</h3>
              <div className="text-white text-sm mb-1">{exp.company}</div>
              <div className="text-gray-400 text-xs mb-3">{exp.duration}</div>
              <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
