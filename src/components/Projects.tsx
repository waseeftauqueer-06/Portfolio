import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Terminal, Cloud, Server, Map, Palette, Zap } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const devopsProjects = [
    {
      icon: Terminal,
      title: "AWS Resource Lister",
      description: "Bash script that automates the process of listing various resources in an AWS account.",
      technologies: ["Bash Script"],
      githubUrl: "https://github.com/waseeftauqueer/AWS-Resources-Lister",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Cloud,
      title: "Serverless Web App",
      description: "Developed and deployed a serverless web application on AWS using S3, API Gateway, DynamoDB, and CloudFront.",
      technologies: ["S3", "API Gateway", "DynamoDB", "CloudFront"],
      githubUrl: "https://github.com/waseeftauqueer/Serverless-Web-Application-on-AWS",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Server,
      title: "NGINX Proxy - NodeJS App",
      description: "This project demonstrates how to set up a Node.js application locally with a secure NGINX reverse proxy.",
      technologies: ["NodeJS", "Docker", "NGINX", "SSL Certs"],
      githubUrl: "https://github.com/waseeftauqueer/Local-Node.js-Deployment-with-Secure-NGINX-Proxy",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const designDevProjects = [
    {
      icon: Map,
      title: "Travel Planner App",
      description: "An interactive itinerary planner developed using the MERN stack.",
      technologies: ["MERN"],
      githubUrl: "https://github.com/shrivarshan-c/Travel-Planner",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "KicksKorner",
      description: "A visually appealing UI design for an e-commerce platform focused on footwear.",
      technologies: ["Figma"],
      behanceUrl: "https://www.behance.net/gallery/197691681/KicksKorner-Shoe-E-Commerce-Website-UIUX",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "The R Logo",
      description: "A sleek and modern logo design created for a client's portfolio.",
      technologies: ["Figma"],
      behanceUrl: "https://www.behance.net/gallery/196313431/Modern-R-Logo",
      color: "from-pink-500 to-red-500"
    }
  ];

  const ProjectCard = ({ project, index, category }: { project: any, index: number, category: string }) => (
    <div
      className={`group relative bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHoveredProject(index + (category === 'design' ? 100 : 0))}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Project Header */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/20 rounded-full"></div>
        </div>
        
        {/* Icon */}
        <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <project.icon className="w-10 h-10 text-white" />
        </div>
        
        {/* Hover Overlay */}
        {hoveredProject === index + (category === 'design' ? 100 : 0) && (
          <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className={`px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${project.color} rounded-full shadow-lg`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <ExternalLink size={16} />
              Behance
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in DevOps automation, cloud architecture, and creative design
          </p>
        </div>

        {/* DevOps Projects */}
        <div className="mb-16">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4">DevOps & Infrastructure</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devopsProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} category="devops" />
            ))}
          </div>
        </div>

        {/* Design & Development Projects */}
        <div>
          <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4">Design & Development</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designDevProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} category="design" />
            ))}
          </div>
        </div>
      </div>

      {/* Section Number */}
      <div className="absolute bottom-8 left-8 text-gray-500">
        <span className="text-6xl font-bold opacity-20">04</span>
      </div>
    </section>
  );
};

export default Projects;