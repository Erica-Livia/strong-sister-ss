// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around py-2">
      <NavLink to="/home" className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
        Home
      </NavLink>
      <NavLink to="/emergency-circle" className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
        Emergency Circle
      </NavLink>
      <NavLink to="/ai-chatbot" className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
        AI ChatBot
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
