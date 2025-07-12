import React, { useState } from 'react';
import { ExternalLink, Github, Play, Calendar, Users, Code, Zap, ArrowRight, Star, Server, Database } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'ResolveNow',
      subtitle: 'Complaint Management System',
      description: 'A comprehensive full-stack complaint management platform that revolutionizes how organizations handle customer issues. Built with real-time tracking, agent dashboards, and seamless communication features.',
      longDescription: 'ResolveNow transforms traditional complaint handling into an efficient, transparent process. Users can submit detailed complaints with attachments, track progress in real-time, and communicate directly with assigned agents. The system includes priority management, status tracking, and a responsive dashboard for both users and administrators.',
      features: [
        'Secure user authentication with form validation',
        'Real-time complaint tracking with visual status indicators',
        'Agent dashboard for efficient complaint management',
        'In-browser messaging system for user-agent communication',
        'Responsive design optimized for all devices',
        'File attachment support for detailed reporting'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
      demoLink: 'https://smartbridge-project-frontend.onrender.com/',
      githubLink: 'https://github.com/praveen-alva/SmartBridge_Project',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Full-Stack',
      status: 'Production',
      timeline: '1 Week',
      team: 'Solo Project',
      highlights: ['Real-time Updates', 'Secure Authentication', 'Responsive Design']
    },
    {
      id: 2,
      title: 'TMDB Movie Clone',
      subtitle: 'Entertainment Discovery Platform',
      description: 'A feature-rich movie discovery application that leverages the TMDB API to provide users with trending movies, advanced search capabilities, and personalized watchlists.',
      longDescription: 'This movie platform offers an immersive experience for film enthusiasts. Users can explore trending movies, search by genre or title, and maintain personal watchlists. The application features smooth navigation, responsive design, and efficient data management using localStorage for offline persistence.',
      features: [
        'Integration with TMDB API for real-time movie data',
        'Advanced search with genre filtering and pagination',
        'Personal watchlist with localStorage persistence',
        'Responsive UI optimized for mobile and desktop',
        'Multi-page navigation with React Router',
        'Movie details with ratings and reviews'
      ],
      techStack: ['React.js', 'Tailwind CSS', 'JavaScript', 'TMDB API', 'React Router', 'localStorage'],
      demoLink: 'https://tmdb-clone1.vercel.app/',
      githubLink: 'https://github.com/praveen-alva/TMDB-Clone',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Frontend',
      status: 'Completed',
      timeline: '1 Week',
      team: 'Solo Project',
      highlights: ['API Integration', 'State Management', 'User Experience']
    },
    {
      id: 3,
      title: 'Task Management App',
      subtitle: 'Productivity Enhancement Tool',
      description: 'An intuitive task management application designed to boost productivity with features for task organization, filtering, and progress tracking.',
      longDescription: 'This productivity tool helps users organize their daily tasks efficiently. With features like task categorization, completion tracking, and smart filtering, users can maintain focus and achieve their goals. The application uses modern React patterns and provides a seamless user experience across all devices.',
      features: [
        'Add, edit, and delete tasks with real-time updates',
        'Task completion tracking with visual indicators',
        'Smart filtering: All, Active, and Completed tasks',
        'Data persistence using localStorage',
        'Responsive design for optimal mobile experience',
        'Keyboard shortcuts for power users'
      ],
      techStack: ['React.js', 'Tailwind CSS', 'JavaScript', 'localStorage', 'React Hooks'],
      demoLink: 'https://todo-app-phi-one-92.vercel.app/',
      githubLink: 'https://github.com/praveen-alva/TodoApp',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Frontend',
      status: 'Completed',
      timeline: '1 Week',
      team: 'Solo Project',
      highlights: ['Clean UI', 'Local Storage', 'React Hooks']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return 'bg-gradient-to-r from-blue-500 to-purple-600';
      case 'Frontend':
        return 'bg-gradient-to-r from-green-500 to-teal-600';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star size={16} />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in full-stack development through real-world applications 
            that solve problems and deliver exceptional user experiences.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(projects[activeProject].category)}`}>
                    {projects[activeProject].category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(projects[activeProject].status)}`}>
                    {projects[activeProject].status}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {projects[activeProject].title}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  {projects[activeProject].subtitle}
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {projects[activeProject].longDescription}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Calendar className="text-blue-600 mx-auto mb-2" size={20} />
                    <div className="text-sm font-semibold text-gray-900">{projects[activeProject].timeline}</div>
                    <div className="text-xs text-gray-600">Timeline</div>
                  </div>
                  <div className="text-center">
                    <Users className="text-blue-600 mx-auto mb-2" size={20} />
                    <div className="text-sm font-semibold text-gray-900">{projects[activeProject].team}</div>
                    <div className="text-xs text-gray-600">Team</div>
                  </div>
                  <div className="text-center">
                    <Code className="text-blue-600 mx-auto mb-2" size={20} />
                    <div className="text-sm font-semibold text-gray-900">{projects[activeProject].techStack.length}</div>
                    <div className="text-xs text-gray-600">Technologies</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.open(projects[activeProject].demoLink, '_blank')}
                    className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Play size={20} />
                    Live Demo
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => window.open(projects[activeProject].githubLink, '_blank')}
                    className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={20} />
                    View Code
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Highlights */}
                <div className="absolute -bottom-6 left-6 right-6">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="text-yellow-500" size={16} />
                      <span className="text-sm font-semibold text-gray-900">Key Highlights</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].highlights.map((highlight, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-2 bg-gray-100 p-2 rounded-xl">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setActiveProject(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoLink, '_blank');
                      }}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubLink, '_blank');
                      }}
                      className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <Github size={14} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Technologies Used Across Projects
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I've utilized to bring these projects to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
              <p className="text-sm text-gray-600">React.js, Tailwind CSS, JavaScript</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, Express.js, RESTful APIs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={24} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
              <p className="text-sm text-gray-600">MongoDB, localStorage</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
              <p className="text-sm text-gray-600">Vercel, Render, GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;