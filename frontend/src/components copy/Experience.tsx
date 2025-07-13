import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Front-End Development Intern',
      company: 'Bharath Intern',
      location: 'Remote',
      duration: 'Mar 2024 - Present',
      description: [
        'Developing responsive web applications using React.js and modern frontend technologies',
        'Collaborating with team members on various client projects',
        'Implementing best practices in code quality and user experience',
        'Participating in code reviews and knowledge sharing sessions'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Santhiram Engineering College, JNTUA University',
      location: 'Nandyal, Andhra Pradesh',
      duration: 'Expected May 2026',
      description: [
        'Relevant coursework in Data Structures, Algorithms, Database Systems, and Software Engineering',
        'Active member of the Coding Club, participating in hackathons and coding challenges',
        'Maintaining strong academic performance while building practical development skills'
      ]
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Dr. B.R. Ambedkar Jr. College',
      location: 'Belagal, Kurnool',
      duration: 'Completed',
      description: [
        'Completed intermediate education with Mathematics, Physics, and Chemistry',
        'Built strong foundation in analytical and problem-solving skills'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={24} />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-gray-600 text-sm">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-600" size={24} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                        <p className="text-gray-600 text-sm">{edu.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurricular Activities
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Extracurricular Activities</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Coding Club Member</h4>
              <p className="text-gray-600">
                Actively engaged in coding challenges, hackathons, and technical workshops. This involvement has 
                significantly enhanced my technical skills, problem-solving abilities, and teamwork capabilities. 
                I regularly participate in competitive programming events and collaborate with fellow developers 
                on innovative projects.
              </p>
            </div>
          </div>
        </div>*/}
      </div> 
    </section>
  );
};

export default Experience;