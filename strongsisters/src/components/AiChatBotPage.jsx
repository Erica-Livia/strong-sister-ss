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

  return (
    <div className="p-4 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-4">AI ChatBot</h1>
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`p-2 rounded mb-2 ${message.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
            {message.text}
          </div>
        ))}
        {loading && <div className="text-gray-500 text-center">Loading...</div>}
      </div>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border p-2 rounded-l"
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AiChatBotPage;
