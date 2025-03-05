export interface Idea {
  id: string;
  title: string;
  description: string;
  contributor: string;
  email: string;
  tags: string[];
  createdAt: string;
}

export interface IdeaSubmission {
  title: string;
  description: string;
  contributor?: string;
  email?: string;
  tags?: string[];
}