import React from 'react';
import { FaPhone, FaEnvelope, FaMicrophone, FaCamera } from 'react-icons/fa';
import '../translate.css';

const Modal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (type) {
      case 'theft':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4 py-8">Take Action</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <div className='w-full py-10'>
              <button className="call-btn call-color flex items-center w-full justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
              CALL POLICE <FaPhone className="ml-2" />
            </button>
            <button className="text-btn flex items-center justify-center w-full  bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mb-2">
              SEND A QUICK MESSAGE <FaEnvelope className="ml-2" />
            </button>
            <button className="audio-btn flex items-center justify-center w-full  bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded mb-2">
              SEND AUDIO <FaMicrophone className="ml-2" />
            </button>
            <button className="video-btn flex items-center justify-center w-full  bg-orange-50 hover:bg-orange-100 text-black font-bold py-2 px-4 rounded">
              RECORD VIDEO/PHOTO <FaCamera className="ml-2" />
            </button>
            </div>
            
          </div>
        );
      case 'medical':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Take Action</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <button className="call-btn call-color flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
              CALL AMBULANCE <FaPhone className="ml-2" />
            </button>
            <button className="text-btn flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
              CONTACT NEARBY HOSPITALS <FaPhone className="ml-2" />
            </button>
            <button className="audio-btn flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2">
              SEND AUDIO <FaMicrophone className="ml-2" />
            </button>
            <button className="video-btn flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              RECORD VIDEO/PHOTO <FaCamera className="ml-2" />
            </button>
          </div>
        );
      case 'gbv':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">GBV Action (Gender Based Violence)</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <button className="call-btn call-color flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
              CALL POLICE <FaPhone className="ml-2" />
            </button>
            <button className="text-btn flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
              CONTACT MIGEPROF
            </button>
            <button className="audio-btn flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2">
              SEND AUDIO <FaMicrophone className="ml-2" />
            </button>
            <button className="video-btn flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              RECORD VIDEO/PHOTO <FaCamera className="ml-2" />
            </button>
          </div>
        );
      case 'natural':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Disaster Action</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <button className="call-btn call-color flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
              CALL MINEMA <FaPhone className="ml-2" />
            </button>
            <button className="text-btn flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
              SEEK NEARBY SHELTER <FaPhone className="ml-2" />
            </button>
            <button className="audio-btn flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2">
              SEND AUDIO <FaMicrophone className="ml-2" />
            </button>
            <button className="video-btn flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              RECORD VIDEO/PHOTO <FaCamera className="ml-2" />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white p-6 rounded shadow-lg h-screen md:h-auto">
        <button className="modal-close absolute top-2 right-2 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded" onClick={onClose}>
          X
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;
