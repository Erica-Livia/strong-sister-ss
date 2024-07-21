// src/components/EmergencyCirclePage.jsx
import React, { useState } from 'react';

const EmergencyCirclePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', phone: '' });
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Emergency Circle</h1>
        <button
          className="text-blue-500"
          onClick={() => setShowModal(true)}
        >
          Add Contact
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add Contact</h2>
            <input
              type="text"
              name="name"
              value={newContact.name}
              onChange={handleInputChange}
              placeholder="Contact Name"
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="phone"
              value={newContact.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="border p-2 mb-2 w-full"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleAddContact}
            >
              Add Contact
            </button>
          </div>
        </div>
      )}
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="border-b py-2">
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyCirclePage;
