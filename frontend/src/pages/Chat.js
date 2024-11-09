import React, { useState } from 'react';

function Chat() {
  // Initialize messages with an intro message from the bot
  const [messages, setMessages] = useState([
    { text: "Welcome to CareCompass, your virtual medical advocate! To get started, please share some information about your situation so I can provide personalized assistance. All data is anonymized and secure, so feel free to explore your situation to your heart’s content. Let’s start with what stage of cancer you are at.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate bot response for now
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Here's a response from your advocate bot!", sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col bg-white" style={{ height: 'calc(100vh - 95px)' }}>
      {/* Chat Window */}
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`px-4 py-2 rounded-lg max-w-md ${
                msg.sender === 'user'
                  ? 'bg-[#80a536] text-white'
                  : 'bg-[#402909] text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Response Options */}
      <div className="flex justify-center space-x-2 bg-gray-100 p-4 border-t border-gray-300">
        {["Hi", "How’s it going?", "Nice to meet you", "I’m here", "Fine, thanks"].map((text, index) => (
          <button
            key={index}
            onClick={() => setMessages([...messages, { text, sender: 'user' }])}
            className="px-4 py-2 bg-[#402909] text-white rounded-full hover:bg-[#80a536] transition"
          >
            {text}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex items-center p-4 bg-gray-50 border-t border-gray-300">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-[#80a536] text-white rounded-r hover:bg-[#402909] transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
