// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center mt-12">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/gouthamkriz" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white text-xl">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/goutham-krishna-c-m/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white text-xl">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:gouthamkrishnacm04@gmail.com" className="text-pink-500 hover:text-white text-xl">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+919946613517" className="text-pink-500 hover:text-white text-xl">
          <i className="fas fa-phone"></i>
        </a>
        <a href="https://www.instagram.com/goutham.krishna.official/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white text-xl">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="text-gray-400 text-sm">&copy; 2025 Goutham Krishna C M. Crafted with ❤️ and cutting-edge tech.</p>
    </footer>
  );
};

export default Footer;
