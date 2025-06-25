import React, { useEffect, useState } from 'react';

const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 transition-all duration-300 ease-out shadow-lg shadow-purple-500/30"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default CustomScrollbar;