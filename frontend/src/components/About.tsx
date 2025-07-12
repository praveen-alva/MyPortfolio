import React from 'react';
import { Code, Users, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Development',
      description: 'Expertise in MERN stack with focus on scalable web applications'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Strong communication and teamwork skills in agile environments'
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Code',
      description: 'Committed to writing clean, efficient, and maintainable code'
    },
    {
      icon: <Target size={24} />,
      title: 'Problem Solving',
      description: 'Analytical mindset with focus on innovative solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate MERN Stack Developer with strong proficiency in building full-stack applications. 
            I love creating RESTful APIs, integrating frontend and backend systems, and deploying modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Currently pursuing my Bachelor's degree in Computer Science and Engineering at Santhiram Engineering College, 
              I'm set to graduate in May 2026. I'm actively working as a Frontend Development Intern at Bharath Intern, 
              where I'm gaining hands-on experience in modern web development practices.
            </p>
            <p className="text-gray-600 mb-6">
              My passion lies in creating efficient, scalable solutions that make a difference. I enjoy the entire 
              development process, from conceptualizing ideas to deploying production-ready applications using 
              platforms like Vercel and Render.
            </p>
            <p className="text-gray-600">
              Beyond coding, I'm an active member of our college's Coding Club, where I participate in hackathons, 
              coding challenges, and workshops that continuously expand my technical horizons.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;