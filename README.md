# IdeaSphere - Idea Sharing Platform

A web application that allows individuals to share and explore innovative ideas or research projects.

## Project Overview

IdeaSphere is a platform where users can submit their ideas and research topics, making them accessible to others. The application includes:

- **Home Screen**: A clean and responsive landing page explaining the purpose of the platform and providing easy navigation.
- **Idea Submission Form**: A form allowing users to submit their ideas or research topics with client-side validation.
- **Wall of Ideas**: A dynamically updating display of all submitted ideas/projects, allowing visitors to explore contributions.
- **Server Implementation**: A backend using Node.js and Express.js with API endpoints to handle submissions and retrieve ideas.

## Technologies Used

- **Frontend**:
  - React with TypeScript
  - React Router for navigation
  - Tailwind CSS for styling
  - Lucide React for icons

- **Backend**:
  - Node.js
  - Express.js
  - In-memory data storage

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server and backend:
   ```
   npm start
   ```
   This will concurrently run both the frontend and backend servers.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Form Validation**: Client-side validation for required fields
- **Search & Filter**: Ability to search ideas and filter by tags
- **Real-time Updates**: Dynamically updating wall of ideas

## API Endpoints

- `GET /ideas` - Retrieve the list of all submitted ideas
- `POST /submit` - Handle new idea/project submissions

## Project Structure

```
idea-sharing-platform/
├── public/
├── server/
│   └── index.js         # Express server
├── src/
│   ├── api/             # API service functions
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
└── package.json
```

## Future Enhancements

- User authentication
- Persistent database storage
- Commenting and voting on ideas
- Rich text editor for idea descriptions
- Social sharing functionality

