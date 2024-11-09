import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chat from './pages/Chat';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="bg-blue-500 p-4 text-white flex justify-center space-x-4">
          <Link to="/" className="hover:underline">Chat</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
        </nav>

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
