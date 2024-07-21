import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useShakeDetection from '../utils/useShakeDetection';
import { MdOutlinePhonelinkRing } from 'react-icons/md';

const AiChatBotPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [alertSent, setAlertSent] = useState(false); // New state for alert

  let lastRequestTime = 0;

  const handleSend = async () => {
    if (!input.trim()) return;

    const currentTime = new Date().getTime();
    if (currentTime - lastRequestTime < 1000) {
      setError('You are sending requests too quickly. Please wait a moment.');
      return;
    }

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');
    setLoading(true);
    setError('');
    lastRequestTime = currentTime;

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant focusing on mental health and the values of Strong Sisters." },
          ...messages.map(msg => ({ role: msg.sender === 'user' ? 'user' : 'assistant', content: msg.text })),
          { role: 'user', content: input }
        ],
      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const reply = response.data.choices[0].message.content;
      setMessages([...messages, newMessage, { sender: 'bot', text: reply }]);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setError('Too many requests. Please try again later.');
      } else {
        setError('Error fetching response from OpenAI.');
      }
      console.error('Error fetching response from OpenAI:', error.response ? error.response.data : error.message);
      setMessages([...messages, newMessage, { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    // Initialize with a greeting message
    if (messages.length === 0) {
      setMessages([{ sender: 'bot', text: 'Hi, how can I help you today?' }]);
    }
  }, []);

  const handleShake = () => {
    setAlertSent(true);
    // Implement the alert sending logic
    sendAlert(['contact1@example.com', 'contact2@example.com']);
  };

  useShakeDetection(handleShake);

  const sendAlert = (contacts) => {
    // Implement actual alert sending logic
    console.log('Alert sent to:', contacts);
    // You could use APIs to send SMS, emails, etc.
  };

  return (
    <div className="flex flex-col h-screen bg-darkGrey">
      <div className="flex-shrink-0 text-darkBlue p-4 shadow-md">
        <h1 className="text-2xl font-bold">AI ChatBot</h1>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start mb-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-xs ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-500 text-center mt-4">Loading...</div>}
        {alertSent && (
          <div className="text-red-500 text-center p-2 bg-red-100 border border-red-400">
            Emergency Alert Sent!
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-center p-2 bg-red-100 border border-red-400">{error}</div>}
      <div className="p-4 pb-28 bg-white shadow-inner flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-lg p-2"
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2"
        >
          Send
        </button>
      </div>
      <div className="fixed bottom-8 right-8">
        <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <MdOutlinePhonelinkRing className="text-3xl" />
          </div>
          <div className="absolute bottom-4 text-xs">Shake your phone</div>
        </div>
      </div>
    </div>
  );
};

export default AiChatBotPage;
