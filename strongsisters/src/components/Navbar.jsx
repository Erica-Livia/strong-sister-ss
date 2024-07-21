// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed bottom-5 w-full bg-gray-200 text-black flex justify-around py-2 text-center">
      <div className='flex space-x-8 text-center'>
        <NavLink to="/home" className={({ isActive }) => (isActive ? "text-darkRed text-center" : "text-black text-center")}>
          <p className='text-center' ><MdHomeFilled className='text-2xl' /></p>
          <p className='text-sm'> Home</p>
        </NavLink>
        <NavLink to="/emergency-circle" className={({ isActive }) => (isActive ? "text-darkRed" : "text-black")}>
          <RiContactsBook3Fill className='text-2xl text-center' /><p className='text-sm'> My Circle</p>
        </NavLink>
        <NavLink to="/ai-chatbot" className={({ isActive }) => (isActive ? "text-darkRed" : "text-black")}>
          <IoChatbubbleEllipses className='text-2xl' /><p className='text-sm'>  AI Chat </p>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "text-darkRed" : "text-black")}>
          <FaUser className='text-2xl' /><p className='text-sm'>Profile</p>
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;
