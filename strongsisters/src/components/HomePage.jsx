import React, { useState } from 'react';
import { FaCamera, FaBell } from 'react-icons/fa';
import { GiDrippingKnife } from "react-icons/gi";
import { FaHandcuffs, FaBriefcaseMedical } from "react-icons/fa6";
import silence from "../assets/silence.jpg"; 
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
    <div className="p-4 text-darkBlue">
      <div className="flex justify-between items-center mb-4 bg-darkGrey py-5">
        <div className="text-l font-bold">Kinanira Bujumbura, Burundi</div>
        <div className="flex space-x-4">
          <button className="text-xl">
            <FaCamera />
          </button>
          <button className="text-xl">
            <FaBell />
          </button>
        </div>
      </div>

      <div className="mt-8 flex">
        <div className="w-1/2 pr-4">
          <p className="text-lg">
            <strong>Are you in an emergency?</strong></p> 
            <p> Press shake your phone, your live location will be shared with the nearest help centre and your emergency contacts.</p>
        </div>
        <div className="w-1/2 h-full">
          <img src={silence} alt="Emergency Image" className="w-full h-auto" />
        </div>
      </div>

      <div className="mt-8 flex justify-center bg-darkGrey py-2">
      <div className="relative border rounded-full p-5 shadow-lg bg-[radial-gradient(circle,_rgba(255,_0,_0,_0.7),_rgba(139,_0,_0,_0.7))]">
        <div className="relative bg-[radial-gradient(circle,_rgba(255,_0,_0,_0.6),_rgba(139,_0,_0,_0.6))] rounded-full p-5 shadow-lg">
          <div className="relative bg-[radial-gradient(circle,_rgba(255,_0,_0,_0.5),_rgba(139,_0,_0,_0.5))] text-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <MdOutlinePhonelinkRing className="text-3xl" />
            </div>
            <div className="absolute bottom-4 text-xs">Shake your phone</div>
          </div>
        </div>
      </div>
    </div>

      <div className="mt-8">
        <h2 className="text-xl mb-4">What's your emergency?</h2>
        <div className="grid grid-cols-2 gap-4">
          <button 
            className="bg-gray-100 rounded-full px-4 py-1 flex items-center space-x-1"
            onClick={() => openModal('gbv')}
          >
            <GiDrippingKnife className='text-4xl p-1 border rounded-full bg-red text-white' />
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
            <FaBriefcaseMedical className="text-4xl p-1 border rounded-full bg-orange-100 text-black"/>
            <span>Medical</span>
          </button>
          <button 
            className="bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-2"
            onClick={() => openModal('natural')}
          >
            <FaCloudShowersWater className="text-4xl p-1 border rounded-full bg-darkRed text-white"/>
            <span>Natural Disaster</span>
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} type={modalType} />
    </div>
  );
};

export default HomePage;
