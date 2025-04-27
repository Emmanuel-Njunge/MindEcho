import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AffirmationsPage from './pages/AffirmationsPage';
import ChatPage from './pages/ChatPage';
import JournalPage from './pages/JournalPage';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [affirmations, setAffirmations] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);

  const addAffirmation = (newAffirmation) => {
    setAffirmations([...affirmations, newAffirmation]);
  };

  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
  };

  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/home" 
          element={
            <HomePage 
              addAffirmation={addAffirmation} 
              addJournalEntry={addJournalEntry} 
            />
          } 
        />
        <Route 
          path="/affirmations" 
          element={<AffirmationsPage affirmations={affirmations} />} 
        />
        <Route path="/chat" element={<ChatPage />} />
        <Route 
          path="/journal" 
          element={<JournalPage entries={journalEntries} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;