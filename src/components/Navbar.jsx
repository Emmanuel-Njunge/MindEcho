import { Link } from 'react-router-dom';
import { FaBrain, FaHome, FaCommentAlt, FaBook, FaSignInAlt, FaUserPlus,FaSignOutAlt,FaRobot} from 'react-icons/fa';
const Navbar = ({ user, logout }) => {
  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FaBrain className="text-2xl" />
          <span className="text-xl font-bold">MindEcho</span>
        </Link>
        
        {user ? (
          <div className="flex space-x-6">
            <Link to="/home" className="flex items-center space-x-1 hover:text-green-200">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link to="/affirmations" className="flex items-center space-x-1 hover:text-green-200">
              <FaCommentAlt />
              <span>Affirmations</span>
            </Link>
            <Link to="/chat" className="flex items-center space-x-1 hover:text-green-200">
              <FaRobot />
              <span>AI Chat</span>
            </Link>
            <Link to="/journal" className="flex items-center space-x-1 hover:text-green-200">
              <FaBook />
              <span>Journal</span>
            </Link>
            <button 
              onClick={logout}
              className="flex items-center space-x-1 hover:text-green-200"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="flex items-center space-x-1 hover:text-green-200">
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="flex items-center space-x-1 hover:text-green-200">
              <FaUserPlus />
              <span>Sign Up</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );