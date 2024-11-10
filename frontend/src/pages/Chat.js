import React, { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    // Function to load Botpress webchat scripts dynamically
    const loadBotpressWebchat = () => {
      // Load the inject.js script
      const injectScript = document.createElement('script');
      injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
      injectScript.async = true;
      document.body.appendChild(injectScript);

      // Load the specific configuration script
      const configScript = document.createElement('script');
      configScript.src = 'https://files.bpcontent.cloud/2024/11/10/01/20241110013216-3796VWKD.js';
      configScript.async = true;
      document.body.appendChild(configScript);

      // Initialize Botpress Webchat after injectScript loads
      injectScript.onload = () => {
        if (window.botpressWebChat) {
          window.botpressWebChat.init();
        }
      };
    };

    // Load Botpress webchat when component mounts
    loadBotpressWebchat();

    // Cleanup: Remove scripts and close the webchat on unmount
    return () => {
      // Remove the injected scripts
      const injectScript = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"]');
      const configScript = document.querySelector('script[src="https://files.bpcontent.cloud/2024/11/10/01/20241110013216-3796VWKD.js"]');
      if (injectScript) document.body.removeChild(injectScript);
      if (configScript) document.body.removeChild(configScript);

      // Close the webchat if it is open
      if (window.botpressWebChat) {
        window.botpressWebChat.close();
      }
    };
  }, []);

  return (
    <div className="Chat">
      <h1>Welcome to the Chat Page</h1>
      <p>Interact with our bot below.</p>
    </div>
  );
}

export default Chat;



// import React, { useState, useEffect } from 'react';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [userKey, setUserKey] = useState(localStorage.getItem('userKey') || null);
//   const [conversationId, setConversationId] = useState(localStorage.getItem('conversationId') || null);

//   const webhookId = process.env.REACT_APP_WEBHOOK_ID; // Set this in .env
//   const apiUrl = `https://chat.botpress.cloud/${webhookId}`;

//   useEffect(() => {
//     const initializeChat = async () => {
//       if (!webhookId) {
//         console.error("Webhook ID is required");
//         return;
//       }

//       try {
//         // Step 1: Create User if userKey is not available
//         if (!userKey) {
//           const userResponse = await fetch(`${apiUrl}/users`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({}),
//           });
//           const userData = await userResponse.json();
//           const generatedUserKey = userData.key;
//           setUserKey(generatedUserKey);
//           localStorage.setItem('userKey', generatedUserKey);
//           console.log("User created with key:", generatedUserKey);
//         }

//         // Step 2: Create Conversation if conversationId is not available
//         if (!conversationId) {
//           const conversationResponse = await fetch(`${apiUrl}/conversations`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'x-user-key': userKey,
//             },
//             body: JSON.stringify({}),
//           });
//           const conversationData = await conversationResponse.json();
//           const generatedConversationId = conversationData.id;
//           setConversationId(generatedConversationId);
//           localStorage.setItem('conversationId', generatedConversationId);
//           console.log("Conversation created with ID:", generatedConversationId);
//         }

//         // Step 3: Set up Server-Sent Events (SSE) to listen for bot responses
//         const eventSource = new EventSource(`${apiUrl}/conversations/${conversationId}/listen?x-user-key=${userKey}`);
//         eventSource.onmessage = (event) => {
//           const message = JSON.parse(event.data);
//           setMessages((prevMessages) => [...prevMessages, { text: message.payload.text, sender: 'bot' }]);
//         };

//         eventSource.onerror = (error) => {
//           console.error("SSE connection error:", error);
//         };
//       } catch (error) {
//         console.error("Error initializing chat:", error);
//       }
//     };

//     initializeChat();
//   }, [apiUrl, userKey, conversationId]);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;
//     if (!userKey || !conversationId) {
//       console.error("User key or conversation ID is missing.");
//       return;
//     }

//     // Add user message to the conversation history
//     const userMessage = { text: input, sender: 'user' };
//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     // Send message to the Botpress API
//     try {
//       await fetch(`${apiUrl}/conversations/${conversationId}/messages`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-user-key': userKey,
//         },
//         body: JSON.stringify({
//           type: 'text',
//           text: input,
//         }),
//       });
//       setInput(''); // Clear input field after sending
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex flex-col bg-white" style={{ height: 'calc(100vh - 95px)' }}>
//       <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
//         {messages.map((msg, index) => (
//           <div key={index} className={`my-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//             <div className={`px-4 py-2 rounded-lg max-w-md ${msg.sender === 'user' ? 'bg-[#80a536] text-white' : 'bg-[#402909] text-white'}`}>
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center p-4 bg-gray-50 border-t border-gray-300">
//         <input
//           type="text"
//           className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//           placeholder="Type your message..."
//         />
//         <button
//           onClick={handleSendMessage}
//           className="px-4 py-2 bg-[#80a536] text-white rounded-r hover:bg-[#402909] transition"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
