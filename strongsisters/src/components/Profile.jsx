import React, { useState } from 'react';
import { FaMapMarkerAlt, FaLanguage, FaRegQuestionCircle, FaSignOutAlt, FaRegUserCircle } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { MdOutlineEdit } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Select from 'react-select';

const ProfilePage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };

    const languageOptions = [
        { value: 'fr', label: 'French' },
        { value: 'en', label: 'English' },
        { value: 'rw', label: 'Kinyarwanda' },
    ];

    return (
        <div className="p-4 bg-white h-screen text-darkBlue">
            <div className="bg-white shadow-md p-4 flex justify-between items-center">
                <div className='flex items-center'>
                <IoIosArrowBack />
                <img
                    src={'https://via.placeholder.com/50'}
                    alt={'contact image'}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <h1 className="text-lg font-bold">UserName</h1>
                </div>
                <button className="text-darkRed flex items-center space-x-2"><MdOutlineEdit />Edit Profile</button>
            </div>

            <div className="mt-4 space-y-2">
                {/* Availability Section */}
                <div className="flex items-center bg-darkGrey p-4 mb-4 rounded-xl">
                    <IoMdCheckmark className="text-green-500 text-2xl mr-2" />
                    <span className="flex-grow">Available</span>
                    <button className="text-darkRed flex items-center space-x-2">Change Status</button>
                </div>

                {/* Location Section */}
                <div className="flex items-center bg-darkGrey p-4 mb-4 rounded-xl">
                    <FaMapMarkerAlt className="text-blue-500 text-2xl mr-2" />
                    <span className="flex-grow">Set Location</span>
                </div>

                {/* Language Section */}
                <div className="flex items-center bg-darkGrey p-4 mb-4 rounded-xl">
                    <FaLanguage className="text-yellow-500 text-2xl mr-2" />
                    <span className="flex-grow">App Language</span>
                    <Select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        options={languageOptions}
                        className="w-1/3"
                    />
                </div>

                {/* Help Section */}
                <div className="flex items-center bg-darkGrey p-4 mb-4 rounded-xl">
                    <FaRegQuestionCircle className="text-gray-500 text-2xl mr-2" />
                    <span className="flex-grow">Help</span>
                </div>

                {/* Logout Section */}
                <div className="flex items-center bg-darkGrey p-4 mb-4 rounded-xl">
                    <FaSignOutAlt className="text-red-500 text-2xl mr-2" />
                    <span className="flex-grow text-red-500">Logout</span>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
