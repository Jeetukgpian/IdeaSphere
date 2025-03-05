import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubmitIdea from './pages/SubmitIdea';
import IdeasWall from './pages/IdeasWall';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<SubmitIdea />} />
            <Route path="/ideas" element={<IdeasWall />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;