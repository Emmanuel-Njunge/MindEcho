import AIChat from '../components/AIChat';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-8rem)]">
        <div className="p-4 bg-green-700 text-white">
          <h1 className="text-xl font-bold">AI Mental Health Assistant</h1>
        </div>
        <AIChat />
      </div>
    </div>
  );
};

export default ChatPage;