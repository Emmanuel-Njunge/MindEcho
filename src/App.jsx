import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AffirmationsPage from './pages/AffirmationsPage';
import ChatPage from './pages/ChatPage';
import JournalPage from './pages/JournalPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/affirmations" element={<AffirmationsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </Router>
  );
}

export default App;