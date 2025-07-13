import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Bell } from 'lucide-react';
import { io } from 'socket.io-client';
import Mernres1 from '../assets/Mernres1.pdf';

import logo from './assets/logo.png';

const socket = io('https://mybackend-dm0d.onrender.com'); //  backend URL

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    socket.on('new-notification', (data) => {
      setNotifications((prev) => [`📩 ${data.title}`, ...prev]);
    });
    return () => {
      socket.off('new-notification');
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="cursor-pointer flex items-center" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black-300 hover:text-white text-sm font-bold text-xl"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 relative">
            {/* 🔔 Notification Bell */}
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="text-gray-400 hover:text-white">
                <Bell className="w-5 h-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                    {notifications.map((note, index) => (
                      <li key={index} className="p-3 text-sm text-gray-700 hover:bg-gray-100">
                        {note}
                      </li>
                    ))}
                    {notifications.length === 0 && (
                      <li className="p-3 text-sm text-gray-500 text-center">No new notifications</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <a href="https://github.com/praveen-alva" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/praveenalva/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href={Mernres1} download className="text-sm bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Download size={16} />
              Resume
            </a>
            <button
              onClick={() => window.open('mailto:praveenalva83@gmail.com')}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Mail size={16} />
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0f172a] rounded-lg p-4 space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white text-base py-2"
              >
                {item.name}
              </button>
            ))}
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/praveen-alva" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/praveenalva83" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <a
                href={Mernres1}
                download
                className="w-full bg-gray-800 text-white py-2 rounded-md flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>
              <button
                onClick={() => window.open('mailto:praveenalva83@gmail.com')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
              >
                <Mail size={16} />
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
