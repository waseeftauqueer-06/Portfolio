import React, { useEffect, useRef, useState } from 'react';
import { 
  Server, 
  Cloud, 
  Terminal, 
  GitBranch, 
  Container, 
  Settings,
  Figma,
  Palette,
  Code,
  Database,
  Leaf,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const devopsSkills = [
    {
      icon: Server,
      name: "Linux",
      description: "System administration and command line proficiency",
      color: "from-orange-500 to-red-500",
      level: 85
    },
    {
      icon: Cloud,
      name: "AWS",
      description: "Cloud infrastructure and serverless solutions",
      color: "from-yellow-500 to-orange-500",
      level: 80
    },
    {
      icon: Terminal,
      name: "Scripting",
      description: "Bash, Python automation and deployment scripts",
      color: "from-green-500 to-blue-500",
      level: 90
    },
    {
      icon: GitBranch,
      name: "GitLab",
      description: "CI/CD pipelines and version control workflows",
      color: "from-purple-500 to-pink-500",
      level: 85
    },
    {
      icon: Container,
      name: "Docker",
      description: "Containerization and microservices architecture",
      color: "from-blue-500 to-cyan-500",
      level: 80
    },
    {
      icon: Settings,
      name: "Kubernetes",
      description: "Container orchestration and cluster management",
      color: "from-indigo-500 to-purple-500",
      level: 75
    },
    {
      icon: Settings,
      name: "Ansible",
      description: "Configuration management and automation",
      color: "from-red-500 to-pink-500",
      level: 70
    }
  ];

  const designDevSkills = [
    {
      icon: Figma,
      name: "Figma",
      description: "UI/UX design and prototyping",
      color: "from-purple-500 to-pink-500",
      level: 85
    },
    {
      icon: Palette,
      name: "Framer",
      description: "Interactive prototypes and animations",
      color: "from-blue-500 to-purple-500",
      level: 75
    },
    {
      icon: Code,
      name: "React",
      description: "Modern frontend development and SPAs",
      color: "from-cyan-500 to-blue-500",
      level: 90
    },
    {
      icon: Leaf,
      name: "Spring Boot",
      description: "Java backend development and REST APIs",
      color: "from-green-500 to-emerald-500",
      level: 80
    },
    {
      icon: Database,
      name: "MySQL",
      description: "Relational database design and optimization",
      color: "from-blue-500 to-indigo-500",
      level: 85
    },
    {
      icon: Database,
      name: "MongoDB",
      description: "NoSQL database and document storage",
      color: "from-green-500 to-teal-500",
      level: 80
    }
  ];

  const SkillCard = ({ skill, index, category }: { skill: any, index: number, category: string }) => (
    <div
      className={`group relative bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHoveredSkill(index + (category === 'design' ? 100 : 0))}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
      
      <div className="relative z-10 text-center space-y-4">
        {/* Icon */}
        <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${skill.color} bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <skill.icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{skill.description}</p>
          
          {/* Skill Level */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100 + 500}ms`
                }}
              >
                <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Effect */}
      {hoveredSkill === index + (category === 'design' ? 100 : 0) && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
      )}
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building and deploying modern applications
          </p>
        </div>

        {/* DevOps Skills */}
        <div className="mb-16">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4">DevOps & Infrastructure</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {devopsSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} category="devops" />
            ))}
          </div>
        </div>

        {/* Design & Development Skills */}
        <div>
          <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4">Design & Development</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designDevSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} category="design" />
            ))}
          </div>
        </div>
      </div>

      {/* Section Number */}
      <div className="absolute bottom-8 left-8 text-gray-500">
        <span className="text-6xl font-bold opacity-20">03</span>
      </div>
    </section>
  );
};

export default Skills;