import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Lightbulb size={24} />
            <span>IdeaSphere</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-indigo-200 transition-colors">
              Home
            </Link>
            <Link to="/ideas" className="hover:text-indigo-200 transition-colors">
              Explore Ideas
            </Link>
            <Link to="/submit" className="hover:text-indigo-200 transition-colors">
              Submit Idea
            </Link>
          </div>
          
          <Link 
            to="/submit" 
            className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition-colors"
          >
            Share Your Idea
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;