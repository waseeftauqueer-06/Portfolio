import React, { useEffect, useState } from 'react';
import { Download, ArrowRight, Code, Zap, Cpu } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hello, my name's Waseef.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-purple-400 font-medium text-lg tracking-wide uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto lg:mx-0"></div>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            I'm a <span className="text-purple-400 font-semibold">DevOps Enthusiast</span> from India.
            <br />Currently exploring cloud infrastructure as an{' '}
            <span className="text-pink-400 font-semibold">AWS Cloud Practitioner</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1XUrh8g2NCGYy11svz6k6w7qrLeuC6fQY/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
            <button
              onClick={scrollToProjects}
              className="cursor-hover group px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              See My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Visual Elements */}
        <div className="relative flex items-center justify-center">
          {/* Floating Icons */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 animate-bounce delay-100">
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <div className="absolute top-20 right-10 animate-bounce delay-300">
              <div className="p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-pink-500/20">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
            </div>
            <div className="absolute bottom-20 left-20 animate-bounce delay-500">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/20">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Central Avatar */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/profilepic.jpeg" 
                  alt="Waseef Tauqueer A" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    WT
                  </span>
                </div>
              </div>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 flex flex-col items-center space-y-4 text-gray-400">
        <span className="text-sm font-medium">01</span>
        <div className="w-px h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
        <span className="text-xs uppercase tracking-wider">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;