// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EmergencyCircle from './components/EmergencyCirclePage';
import AiChatBotPage from './components/AiChatBotPage';
// import Login from './components/Login';
// import Register from './components/Register';
import Welcome from './components/Welcome';
import ProfilePage from './components/Profile';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/emergency-circle" element={<EmergencyCircle />} />
          <Route path="/ai-chatbot" element={<AiChatBotPage />} />
          <Route path="*" element={<Welcome />} />
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
