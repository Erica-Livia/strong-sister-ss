// src/components/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Strong Sisters</h1>
      <div className="space-x-4">
        {/* <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </Link>
        <Link to="/register" className="bg-green-500 text-white py-2 px-4 rounded">
          Register
        </Link> */}
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
};

export default Welcome;
