// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-black text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">🤖 AI/ML & Deep Learning</h3>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'Scikit-learn', 'Transformers', 'LSTM', 'NLP', 'Computer Vision', 'MediaPipe'].map(skill => (
                <span key={skill} className="bg-pink-600 bg-opacity-10 border border-pink-600 border-opacity-30 text-pink-400 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">💻 Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C', 'SQL', 'PL/SQL', 'JavaScript', 'HTML/CSS'].map(skill => (
                <span key={skill} className="bg-pink-600 bg-opacity-10 border border-pink-600 border-opacity-30 text-pink-400 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">📊 Data Science & Analytics</h3>
            <div className="flex flex-wrap gap-2">
              {['Pandas', 'NumPy', 'Power BI', 'Data Visualization', 'Statistical Analysis', 'Predictive Modeling'].map(skill => (
                <span key={skill} className="bg-pink-600 bg-opacity-10 border border-pink-600 border-opacity-30 text-pink-400 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">🛠️ Development Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'FastAPI', 'AWS', 'Docker', 'REST APIs', 'CI/CD'].map(skill => (
                <span key={skill} className="bg-pink-600 bg-opacity-10 border border-pink-600 border-opacity-30 text-pink-400 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
