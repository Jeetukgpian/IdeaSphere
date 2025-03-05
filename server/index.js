import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for ideas
const ideas = [];

// API Routes
app.get('/ideas', (req, res) => {
  res.json(ideas);
});

app.post('/submit', (req, res) => {
  const { title, description, contributor, email, tags } = req.body;
  
  // Validate required fields
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  
  // Create new idea with timestamp
  const newIdea = {
    id: Date.now().toString(),
    title,
    description,
    contributor: contributor || 'Anonymous',
    email: email || '',
    tags: tags || [],
    createdAt: new Date().toISOString()
  };
  
  // Add to in-memory storage
  ideas.push(newIdea);
  
  res.status(201).json(newIdea);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});