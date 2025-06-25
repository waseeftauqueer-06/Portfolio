import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-purple-500/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>&copy; 2025 Waseef Tauqueer A. All rights reserved.</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;