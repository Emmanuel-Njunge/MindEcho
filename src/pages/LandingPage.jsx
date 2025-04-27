import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
    
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/background.mp4.mp4" type="video/mp4" />
      </video>

    
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to MindEcho</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/signup" className="cta-button">
            Get Started
          </Link>
          <Link to="/login" className="cta-button-outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;