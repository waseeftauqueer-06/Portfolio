import React, { useEffect, useRef, useState } from 'react';
import { User, Target, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: User,
      title: "DevOps Enthusiast",
      description: "Passionate about automation and infrastructure optimization"
    },
    {
      icon: Target,
      title: "AWS Cloud Practitioner",
      description: "Exploring cloud solutions and serverless architectures"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "Breaking things and fixing them better is where real learning happens"
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into scalable solutions through the power of DevOps and cloud technologies
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                Hey there! I'm <span className="text-purple-400 font-semibold">Waseef Tauqueer</span> — an engineering student on a mission to master the world of DevOps. From spinning up cloud infrastructure to automating deployment pipelines, I thrive at the intersection of development and operations.
              </p>
              
              <p className="text-lg leading-relaxed">
                Whether it's writing shell scripts at 2AM or configuring Kubernetes clusters, I enjoy making systems <span className="text-pink-400 font-semibold">faster, smarter, and more reliable</span>. I'm currently diving deep into tools like Docker, Jenkins, Ansible, and AWS, with a strong focus on building CI/CD workflows that just work.
              </p>
              
              <p className="text-lg leading-relaxed">
                While DevOps is my core, I also have a soft spot for design and development. I love experimenting with UI/UX, crafting intuitive interfaces, and bringing ideas to life through clean, responsive code.
              </p>
              
              <p className="text-lg leading-relaxed">
                If it involves <span className="text-purple-400 font-semibold">automation</span>, <span className="text-pink-400 font-semibold">optimization</span>, or a bit of <span className="text-blue-400 font-semibold">creativity</span> — count me in.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              
              {/* Content Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Engineering Student</h3>
                    <p className="text-purple-300">Specializing in DevOps & Cloud Architecture</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-purple-500/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-400">3+</div>
                      <div className="text-sm text-gray-300">Years Learning</div>
                    </div>
                    <div className="bg-pink-500/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-pink-400">10+</div>
                      <div className="text-sm text-gray-300">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`cursor-hover group bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Number */}
      <div className="absolute bottom-8 left-8 text-gray-500">
        <span className="text-6xl font-bold opacity-20">02</span>
      </div>
    </section>
  );
};

export default About;