import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, Mail } from 'lucide-react';

interface Idea {
  id: string;
  title: string;
  description: string;
  contributor: string;
  email: string;
  tags: string[];
  createdAt: string;
}

const IdeasWall: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('http://localhost:3001/ideas');
        
        if (!response.ok) {
          throw new Error('Failed to fetch ideas');
        }
        
        const data = await response.json();
        setIdeas(data);
        setFilteredIdeas(data);
      } catch (error) {
        console.error('Error fetching ideas:', error);
        setError('Failed to load ideas. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchIdeas();
  }, []);

  useEffect(() => {
    // Filter ideas based on search term and selected tag
    let filtered = ideas;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(idea => 
        idea.title.toLowerCase().includes(term) || 
        idea.description.toLowerCase().includes(term) ||
        idea.contributor.toLowerCase().includes(term)
      );
    }
    
    if (selectedTag) {
      filtered = filtered.filter(idea => 
        idea.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }
    
    setFilteredIdeas(filtered);
  }, [searchTerm, selectedTag, ideas]);

  // Get all unique tags from ideas
  const allTags = Array.from(
    new Set(
      ideas.flatMap(idea => idea.tags)
    )
  ).sort();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Wall of Ideas</h1>
        
        {/* Search and Filter */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-4xl mx-auto">
            <p>{error}</p>
          </div>
        ) : filteredIdeas.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600 mb-4">No ideas found</h3>
            <p className="text-gray-500 mb-6">Be the first to share your innovative idea!</p>
            <Link
              to="/submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Submit an Idea
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map(idea => (
              <div key={idea.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-indigo-700">{idea.title}</h2>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{formatDate(idea.createdAt)}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <User size={14} className="mr-1" />
                    <span>{idea.contributor}</span>
                  </div>
                  
                  {idea.email && (
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Mail size={14} className="mr-1" />
                      <a href={`mailto:${idea.email}`} className="text-indigo-600 hover:underline">
                        {idea.email}
                      </a>
                    </div>
                  )}
                  
                  {idea.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {idea.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
                          onClick={() => setSelectedTag(tag)}
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* CTA for submitting new ideas */}
        <div className="mt-12 text-center">
          <Link
            to="/submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
          >
            Submit Your Idea
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdeasWall;