
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your MindEcho assistant. How are you feeling today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getAIResponse = async (userMessage) => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    
  
    const responses = [
      "I hear you. Remember, every challenge helps us grow stronger.",
      "That's understandable. Have you tried deep breathing exercises?",
      "You're more resilient than you think. What's one small positive step you can take today?",
      "Thank you for sharing. What usually helps you in moments like this?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    const aiResponse = await getAIResponse(input);
    setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${
              message.sender === 'user' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 rounded-lg p-3 max-w-xs">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-r ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChat;