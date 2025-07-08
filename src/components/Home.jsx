// src/components/Home.jsx
import React from 'react';
import '../styles/particles.css';

const Home = () => {
  return (
    <section id="home" className="hero bg-black text-white py-20 px-6 relative overflow-hidden" data-aos="fade-up">
      <div className="hero-content max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">GOUTHAM KRISHNA</h1>
        <p className="subtitle text-xl font-semibold text-pink-500 mb-4">AI/ML Engineer & Data Science Enthusiast</p>
        <p className="description text-lg text-gray-300 mb-8">
          Transforming data into intelligent solutions with cutting-edge machine learning and deep learning technologies. Building the future, one algorithm at a time.
        </p>
        <div className="cta-buttons flex justify-center gap-4">
          <a href="#projects" className="btn btn-primary bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md">
            🚀 View Projects
          </a>
          <a href="#contact" className="btn btn-secondary bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
            ✉️ Get In Touch
          </a>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              background: ['#00d4ff', '#ff006e', '#8338ec'][i % 3],
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Home;