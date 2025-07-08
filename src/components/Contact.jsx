// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Let's Connect</h2>

        <div className="flex justify-center mb-10">
          <img
            src="https://avatars.githubusercontent.com/u/128897459?s=400&u=343690bd2e36485e4f5770f3a20658c8b72b88ea&v=4"
            alt="Goutham Krishna Profile"
            className="w-40 h-40 rounded-full border-4 border-pink-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
              <i className="fas fa-envelope text-pink-500 text-xl"></i>
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <a href="mailto:gouthamkrishnacm04@gmail.com" className="text-gray-400 hover:text-white transition">gouthamkrishnacm04@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
              <i className="fas fa-phone text-pink-500 text-xl"></i>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <a href="tel:+919946613517" className="text-gray-400 hover:text-white transition">+91 9946613517</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
              <i className="fas fa-map-marker-alt text-pink-500 text-xl"></i>
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-gray-400">Thrissur, Kerala, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
              <i className="fab fa-linkedin text-pink-500 text-xl"></i>
              <div>
                <h4 className="text-lg font-semibold">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/goutham-krishna-c-m/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">linkedin.com/in/goutham-krishna-c-m</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
              <i className="fab fa-github text-pink-500 text-xl"></i>
              <div>
                <h4 className="text-lg font-semibold">GitHub</h4>
                <a href="https://github.com/gouthamkriz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">github.com/gouthamkriz</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
              <i className="fab fa-instagram text-pink-500 text-xl"></i>
              <div>
                <h4 className="text-lg font-semibold">Instagram</h4>
                <a href="https://www.instagram.com/_gouthm_/profilecard/?igsh=MW1xeGtyNzZtbzloaQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">@_gouthm_</a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const subject = formData.get('subject');
              const message = formData.get('message');
              const mailtoLink = `mailto:gouthamkrishnacm04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
              window.location.href = mailtoLink;
              e.target.reset();
              alert('Thank you for your message! Your email client should open.');
            }}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" name="name" required className="w-full p-3 rounded bg-gray-800 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" name="email" required className="w-full p-3 rounded bg-gray-800 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <input type="text" name="subject" required className="w-full p-3 rounded bg-gray-800 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea name="message" rows="5" required className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
              </div>
              <button type="submit" className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-3 rounded font-semibold">
                <i className="fas fa-paper-plane mr-2"></i>Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
