import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-[#0a0a0a] text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="mb-4">
              I'm a passionate Computer Science graduate with 1 year of experience as a Junior Python Developer, specializing in AI/ML and data science. My journey in technology is driven by a relentless curiosity to solve complex problems and create intelligent solutions that make a real-world impact.
            </p>
            <p className="mb-4">
              With expertise in deep learning, NLP, and real-time applications, I've successfully delivered production-ready systems that bridge the gap between cutting-edge research and practical implementation.
            </p>
            <p>
              Based in the beautiful state of Kerala, India, I'm always eager to take on new challenges and collaborate with teams that share my passion for innovation and technology excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1e1e1e] p-6 rounded-xl text-center">
              <div className="text-2xl font-bold">1+</div>
              <div>Years Experience</div>
            </div>
            <div className="bg-[#1e1e1e] p-6 rounded-xl text-center">
              <div className="text-2xl font-bold">10+</div>
              <div>Projects Completed</div>
            </div>
            <div className="bg-[#1e1e1e] p-6 rounded-xl text-center">
              <div className="text-2xl font-bold">94%</div>
              <div>Model Accuracy</div>
            </div>
            <div className="bg-[#1e1e1e] p-6 rounded-xl text-center">
              <div className="text-2xl font-bold">5+</div>
              <div>Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
