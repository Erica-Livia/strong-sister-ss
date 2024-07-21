import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EmergencyCirclePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', phone: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Load contacts from local storage on component mount
  useEffect(() => {
    try {
      const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      console.log('Loaded contacts from localStorage:', storedContacts);
      setContacts(storedContacts);
    } catch (error) {
      console.error('Failed to load contacts from localStorage:', error);
    }
  }, []);

  // Save contacts to local storage whenever the contacts state changes
  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      console.log('Saving contacts to localStorage:', contacts);
    } catch (error) {
      console.error('Failed to save contacts to localStorage:', error);
    }
  }, [contacts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    if (isEditing) {
      const updatedContacts = contacts.map((contact, index) =>
        index === currentIndex ? newContact : contact
      );
      setContacts(updatedContacts);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setContacts([...contacts, newContact]);
    }
    setNewContact({ name: '', phone: '', image: '' });
    setShowModal(false);
  };

  const handleEditContact = (index) => {
    setNewContact(contacts[index]);
    setIsEditing(true);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-darkBlue">Emergency Circle</h1>
        <button
          className="text-darkRed"
          onClick={() => setShowModal(true)}
        >
          + Add Contact
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg text-darkRed font-bold mb-4">{isEditing ? 'Edit Contact' : 'Add Contact'}</h2>
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
              className="bg-darkRed text-white px-4 py-2 rounded"
              onClick={handleAddContact}
            >
              {isEditing ? 'Update Contact' : 'Add Contact'}
            </button>
          </div>
        </div>
      )}
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="py-2 flex items-center justify-between bg-darkGrey my-5 border rounded-2xl">
            <div className="flex items-center">
              <img
                src={contact.image || 'https://via.placeholder.com/50'}
                alt={contact.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <span>{contact.name} - {contact.phone}</span>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEditContact(index)} className="text-darkBlue text-xl">
                <FaEdit />
              </button>
              <button onClick={() => handleDeleteContact(index)} className="text-darkRed">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyCirclePage;
