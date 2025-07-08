// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Generator",
      description: "Generate ATS-friendly resumes using GPT and FastAPI with rich formatting and downloadable PDFs.",
      link: "https://github.com/gouthamkriz/resume-generator-ai",
    },
    {
      title: "AI Resume Critiquer",
      description: "AI-powered tool to review resumes and provide constructive feedback for improvements.",
      link: "https://github.com/gouthamkriz/AI-Resume-Critiquer",
    },
    {
      title: "Movie Recommender using AI",
      description: "Recommends movies using content-based filtering techniques in machine learning.",
      link: "https://github.com/gouthamkriz/Movie-Recomendor-using-AI",
    },
    {
      title: "Flower Classifier",
      description: "A CNN-based deep learning model that classifies flower species using TensorFlow.",
      link: "https://github.com/gouthamkriz/Flower-Classifier",
    },
    {
      title: "Digit Classifier AI",
      description: "A simple digit recognition AI using MNIST dataset and neural networks.",
      link: "https://github.com/gouthamkriz/Digit-classifier-AI",
    },
    {
      title: "Emotion Detection using Text",
      description: "Detects emotion from input text using NLP and machine learning techniques.",
      link: "https://github.com/gouthamkriz/emotion-detection-using-text",
    },
    {
      title: "Emoji Predictor",
      description: "Predict emojis based on text input using deep learning and text embeddings.",
      link: "https://github.com/gouthamkriz/emoji_predictor",
    },
    {
      title: "Weather Reporter",
      description: "A simple app that fetches and displays weather information based on user input.",
      link: "https://github.com/gouthamkriz/weather-reporter",
    },
    {
      title: "AI Calculator",
      description: "A minimal AI calculator that understands and evaluates natural language math queries.",
      link: "https://github.com/gouthamkriz/A-simple-AI-calculator",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-pink-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-500">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;