// src/components/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-darkRed">Welcome to Strong Sisters</h1>
      <div className="space-x-4">
       
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
};

export default Welcome;
