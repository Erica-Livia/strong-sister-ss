// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-200 text-black flex justify-around py-2 text-center">
      <NavLink to="/home" className={({ isActive }) => (isActive ? "text-red-500 text-center" : "text-black text-center")}>
      <MdHomeFilled  className='text-2xl text-center'/>
        Home
      </NavLink>
      <NavLink to="/emergency-circle" className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}>
      <RiContactsBook3Fill className='text-2xl'/> My Circle
      </NavLink>
      <NavLink to="/ai-chatbot" className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}>
      <IoChatbubbleEllipses className='text-2xl' />  AI Chat
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}>
      <FaUser className='text-2xl'/>Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
