import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Bell } from 'lucide-react';
import { io } from 'socket.io-client';

import logo from '../assets/logo.png';

// Replace this placeholder string with the actual import path or URL of your resume
const resumeUrl = '#'; 

const socket = io('https://mybackend-dm0d.onrender.com');

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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    <header className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Section */}
          <div className="cursor-pointer flex items-center flex-shrink-0" onClick={() => scrollToSection('home')}>
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-semibold"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 relative">
            {/* 🔔 Notification Bell */}
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="text-gray-400 hover:text-white transition-colors relative p-1">
                <Bell className="w-5 h-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {notifications.length}
                  </span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                  <ul className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
                    {notifications.map((note, index) => (
                      <li key={index} className="p-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        {note}
                      </li>
                    ))}
                    {notifications.length === 0 && (
                      <li className="p-4 text-sm text-gray-400 text-center">No new notifications</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Social Links */}
            <a href="https://github.com/praveen-alva" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/praveenalva/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            
            {/* Action Buttons */}
            <a href={resumeUrl} download className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
              <Download size={16} />
              Resume
            </a>
            <button
              onClick={() => window.open('mailto:praveenalva83@gmail.com')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <Mail size={16} />
              Hire Me
            </button>
          </div>

          {/* Mobile Menu & Utility Buttons Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Mobile Notification Icon */}
            <div className="relative">
              <button onClick={() => { setIsMenuOpen(true); setShowNotifications(true); }} className="text-gray-400 hover:text-white relative p-1">
                <Bell className="w-6 h-6" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full" />
                )}
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Wrapper */}
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 top-full w-full bg-slate-900 border-t border-slate-800 px-4 py-6 shadow-2xl transition-all duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Notifications Panel in Mobile */}
          {showNotifications && notifications.length > 0 && (
            <div className="mb-6 bg-slate-800 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-1.5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Notifications</p>
                <button onClick={() => setShowNotifications(false)} className="text-xs text-blue-400 hover:text-blue-300">Hide</button>
              </div>
              <ul className="space-y-2 max-h-40 overflow-y-auto">
                {notifications.map((note, index) => (
                  <li key={index} className="text-sm text-gray-200 bg-slate-800/50 p-2 rounded">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <nav className="flex flex-col space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left text-gray-300 hover:text-white text-lg py-2 font-medium border-b border-slate-800/50 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Icons row for Mobile */}
          <div className="flex gap-6 mt-6 border-t border-slate-800 pt-6 justify-center">
            <a href="https://github.com/praveen-alva" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/praveenalva83" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full">
              <Linkedin size={22} />
            </a>
          </div>

          {/* CTA Buttons stack for Mobile */}
          <div className="flex flex-col gap-3 mt-6">
            <a
              href={resumeUrl}
              download
              className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                window.open('mailto:praveenalva83@gmail.com');
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition-colors"
            >
              <Mail size={18} />
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;