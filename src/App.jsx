import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import AffirmationsPage from './pages/AffirmationsPage';
import JournalPage from './pages/JournalPage';
import ChatPage from './pages/ChatPage';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [affirmations, setAffirmations] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <Router>
      <ToastContainer />
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Authentication Routes */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/home" /> : <LoginPage login={login} />} 
        />
        <Route 
          path="/signup" 
          element={user ? <Navigate to="/home" /> : <SignUpPage login={login} />} 
        />
        
        {/* Protected Routes */}
        <Route 
          path="/home" 
          element={
            user ? (
              <HomePage 
                addAffirmation={(aff) => setAffirmations([...affirmations, aff])}
                addJournalEntry={(entry) => setJournalEntries([...journalEntries, entry])}
              />
            ) : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/affirmations" 
          element={user ? <AffirmationsPage affirmations={affirmations} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/journal" 
          element={
            user ? (
              <JournalPage 
                entries={journalEntries}
                addJournalEntry={(entry) => setJournalEntries([...journalEntries, entry])}
              />
            ) : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/chat" 
          element={user ? <ChatPage /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;