import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Share Your Brilliant Ideas with the World
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            IdeaSphere is a platform where innovators, researchers, and creative minds
            can share their ideas and discover inspiring projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/submit"
              className="bg-white text-indigo-600 px-8 py-3 rounded-md font-bold hover:bg-indigo-100 transition-colors"
            >
              Submit Your Idea
            </Link>
            <Link
              to="/ideas"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              Explore Ideas
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Share Your Ideas</h3>
              <p className="text-gray-600">
                Submit your innovative ideas, research projects, or creative concepts through our simple form.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect with Others</h3>
              <p className="text-gray-600">
                Discover like-minded individuals and potential collaborators for your projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Inspired</h3>
              <p className="text-gray-600">
                Explore a diverse collection of ideas from innovators around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Share Your Idea?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing community of innovators and make your ideas visible to the world.
          </p>
          <Link
            to="/submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md font-bold hover:bg-indigo-700 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;