// src/components/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl">User Location</div>
        <div className="flex space-x-4">
          <button className="text-2xl">📷</button>
          <button className="text-2xl">🔔</button>
        </div>
      </div>
      <div className="mt-8 flex">
        <div className="w-1/2">
          <p className="text-lg">
            Are you in an emergency? Press shake your phone, your live location will be shared with the nearest help centre and your emergency contacts.
          </p>
        </div>
        <div className="w-1/2">
          <img src="/path-to-your-image.jpg" alt="Emergency Image" />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center">
          SOS
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl mb-4">What's your emergency?</h2>
        <div className="flex space-x-4">
          <button className="bg-gray-200 rounded-full px-4 py-2">Emergency 1</button>
          <button className="bg-gray-200 rounded-full px-4 py-2">Emergency 2</button>
          <button className="bg-gray-200 rounded-full px-4 py-2">Emergency 3</button>
          <button className="bg-gray-200 rounded-full px-4 py-2">Emergency 4</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
