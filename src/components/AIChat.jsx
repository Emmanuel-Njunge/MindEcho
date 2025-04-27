import { useState, useRef, useEffect } from 'react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your MindEcho assistant. How can I help you today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);


  const aiResponses = {
    'hello': 'Hi there! How are you feeling today?',
    'hi': 'Hello! Ready for some positive affirmations?',
    'home': 'The home page is where you can select your mood and get affirmations.',
    'affirmations': 'Check your affirmations page to see all your saved positive messages!',
    'journal': 'Your journal helps track daily thoughts and feelings.',
    'default': "I'm here to help with mental wellness. Try asking about the app's features!"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

 
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = aiResponses.default;

      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = aiResponses.hello;
      } else if (lowerInput.includes('home')) {
        response = aiResponses.home;
      } else if (lowerInput.includes('affirmation')) {
        response = aiResponses.affirmations;
      } else if (lowerInput.includes('journal')) {
        response = aiResponses.journal;
      }

      setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
    }, 500); 
  };


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg ${
              msg.sender === 'user' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="w-full p-2 border rounded"
        />
      </form>
    </div>
  );
};

export default AIChat;