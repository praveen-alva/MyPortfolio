import React from 'react';
import { Code2, Database, Server, Settings, Star, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: <Code2 size={28} />,
      color: 'blue',
      skills: [
        { name: 'React.js', description: 'Component-based UI development with hooks and state management' },
        { name: 'JavaScript ES6+', description: 'Modern JavaScript features and asynchronous programming' },
        { name: 'HTML5 & CSS3', description: 'Semantic markup, responsive design, and modern styling' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' }
      ]
    },
    {
      category: 'Backend Development',
      icon: <Server size={28} />,
      color: 'emerald',
      skills: [
        { name: 'Node.js', description: 'Server-side JavaScript runtime for scalable applications' },
        { name: 'Express.js', description: 'Fast, minimalist web framework for Node.js' },
        { name: 'RESTful APIs', description: 'API design, development, and integration' },
        { name: 'Java', description: 'Object-oriented programming and enterprise applications' }
      ]
    },
    {
      category: 'Database & Storage',
      icon: <Database size={28} />,
      color: 'violet',
      skills: [
        { name: 'MongoDB', description: 'NoSQL document database for flexible data modeling' },
        { name: 'SQL', description: 'Relational database design and complex queries' }
      ]
    },
    {
      category: 'Tools & Deployment',
      icon: <Settings size={28} />,
      color: 'orange',
      skills: [
        { name: 'Git & GitHub', description: 'Version control, collaboration, and code management' },
        { name: 'VS Code', description: 'Advanced code editing, debugging, and extensions' },
        { name: 'Vercel', description: 'Frontend deployment and serverless functions' },
        { name: 'Render', description: 'Full-stack application hosting and deployment' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        icon: 'text-blue-600',
        iconBg: 'bg-blue-100',
        badge: 'bg-blue-600',
        text: 'text-blue-700'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        icon: 'text-emerald-600',
        iconBg: 'bg-emerald-100',
        badge: 'bg-emerald-600',
        text: 'text-emerald-700'
      },
      violet: {
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        icon: 'text-violet-600',
        iconBg: 'bg-violet-100',
        badge: 'bg-violet-600',
        text: 'text-violet-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        icon: 'text-orange-600',
        iconBg: 'bg-orange-100',
        badge: 'bg-orange-600',
        text: 'text-orange-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star size={16} />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proficient in modern web development technologies with a focus on creating 
            scalable, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillsData.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${colorClasses.iconBg} ${colorClasses.icon} p-4 rounded-xl`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`${colorClasses.badge} w-2 h-2 rounded-full`}></div>
                      <span className="text-sm text-gray-600 font-medium">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle size={18} className={`${colorClasses.icon} flex-shrink-0`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Combining technical proficiency with creative problem-solving to deliver exceptional web solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code2 size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Frontend</h4>
              <p className="text-gray-400 text-sm">Modern UI/UX Development</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Server size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Backend</h4>
              <p className="text-gray-400 text-sm">API & Server Development</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-violet-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Database</h4>
              <p className="text-gray-400 text-sm">Data Management & Design</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Settings size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">DevOps</h4>
              <p className="text-gray-400 text-sm">Deployment & Tools</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">MERN Stack</div>
                <div className="text-gray-300 text-sm">Full-Stack Specialization</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">3+ Projects</div>
                <div className="text-gray-300 text-sm">Production Applications</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-violet-400 mb-2">Clean Code</div>
                <div className="text-gray-300 text-sm">Best Practices Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;