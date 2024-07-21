import React, { useState } from 'react';
import { FaCamera, FaBell } from 'react-icons/fa';
import { GiDrippingKnife } from "react-icons/gi";
import { FaHandcuffs, FaBriefcaseMedical } from "react-icons/fa6";
import silence from "../assets/silence.png"; 
import { FaCloudShowersWater } from "react-icons/fa6";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import Modal from './Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">Kinanira Bujumbura, Burundi</div>
        <div className="flex space-x-4">
          <button className="text-2xl">
            <FaCamera />
          </button>
          <button className="text-2xl">
            <FaBell />
          </button>
        </div>
      </div>

      <div className="mt-8 flex">
        <div className="w-1/2 pr-4">
          <p className="text-lg">
            <strong>Are you in an emergency?</strong> Press shake your phone, your live location will be shared with the nearest help centre and your emergency contacts.
          </p>
        </div>
        <div className="w-1/2">
          <img src={silence} alt="Emergency Image" className="w-full h-auto" />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative bg-red-600 text-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <MdOutlinePhonelinkRing className='text-3xl bottom-4'/>
          </div>
          <div className="absolute bottom-8 text-xs">Shake your phone</div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-4">What's your emergency?</h2>
        <div className="grid grid-cols-2 gap-4">
          <button 
            className="bg-gray-100 rounded-full px-4 py-1 flex items-center space-x-1"
            onClick={() => openModal('gbv')}
          >
            <GiDrippingKnife className='text-4xl p-1 border rounded-full bg-red-700 text-white' />
            <span>Gender Based Violence</span>
          </button>
          <button 
            className="bg-gray-100 rounded-full px-4 py-1 flex items-center space-x-1"
            onClick={() => openModal('theft')}
          >
            <FaHandcuffs className='text-4xl p-1 border rounded-full bg-gray-400 text-black' />
            <span>Theft</span>
          </button>
          <button 
            className="bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-1"
            onClick={() => openModal('medical')}
          >
            <FaBriefcaseMedical className="text-4xl p-1 border rounded-full bg-red-100 text-black"/>
            <span>Medical</span>
          </button>
          <button 
            className="bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-2"
            onClick={() => openModal('natural')}
          >
            <FaCloudShowersWater className="text-4xl p-1 border rounded-full bg-red-900 text-white"/>
            <span>Natural Disaster</span>
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} type={modalType} />
    </div>
  );
};

export default HomePage;
