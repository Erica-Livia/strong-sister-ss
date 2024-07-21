import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AiChatBotPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const reply = response.data.choices[0].message.content;
      setMessages([...messages, newMessage, { sender: 'bot', text: reply }]);
    } catch (error) {
      setError('Error fetching response from OpenAI.');
      console.error('Error fetching response from OpenAI:', error);
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
    if (messages.length === 0) {
      setMessages([{ sender: 'bot', text: 'Hi, how can I help you today?' }]);
    }
  }, []);

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
    </div>
  );
};

export default AiChatBotPage;
