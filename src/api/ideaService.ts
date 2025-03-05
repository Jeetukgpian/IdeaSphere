import { Idea, IdeaSubmission } from '../types';

const API_URL = 'http://localhost:3001';

export const fetchIdeas = async (): Promise<Idea[]> => {
  try {
    const response = await fetch(`${API_URL}/ideas`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch ideas');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching ideas:', error);
    throw error;
  }
};

export const submitIdea = async (idea: IdeaSubmission): Promise<Idea> => {
  try {
    const response = await fetch(`${API_URL}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(idea)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit idea');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting idea:', error);
    throw error;
  }
};