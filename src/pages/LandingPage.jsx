import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to MindEcho</h1>
        <p className="text-xl mb-8">Your personal AI-powered affirmation hub</p>
        
        <div className="flex space-x-4">
          <Link 
            to="/signup" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Get Started
          </Link>
          <Link 
            to="/login" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;