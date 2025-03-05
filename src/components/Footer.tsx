import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">IdeaSphere</h3>
            <p className="text-gray-400 mt-1">Share and discover innovative ideas</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} IdeaSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;