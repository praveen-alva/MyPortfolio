import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Github, Linkedin, Download } from 'lucide-react';
import pic from '../assets/pic.webp';


const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['MERN Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-28 sm:pt-32 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-pink-400">Praveen Kumar</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-pink-300 font-semibold">
            {roles[roleIndex]}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl">
            Building seamless and scalable digital experiences with the power of the MERN stack. Clean code, beautiful interfaces, and strong backend logic.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={scrollToAbout}
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-white font-medium transition shadow-lg"
            >
              Explore More
            </button>
            <a
              href="mailto:praveenalva83@gmail.com"
              className="px-6 py-3 border border-pink-500 rounded-lg text-pink-300 hover:bg-pink-600 hover:text-white transition shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/assets/Mernres1.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition shadow-md"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-6">
            <a href="https://github.com/praveenalva83" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/praveenalva83" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:praveenalva83@gmail.com" className="hover:text-pink-400">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_40px_10px_rgba(236,72,153,0.3)] overflow-hidden">
            <img src={pic} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToAbout} className="text-pink-300 hover:text-white flex flex-col items-center">
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="animate-bounce mt-1" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
