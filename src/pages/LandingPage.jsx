import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900 opacity-90"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">Welcome to MindEcho</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Your personal AI-powered mental wellness companion
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/signup" 
            className="bg-white text-green-800 hover:bg-green-100 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Get Started
          </Link>
          <Link 
            to="/login" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;