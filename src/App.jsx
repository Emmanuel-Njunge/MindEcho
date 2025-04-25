import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoodSelection from "./components/MoodSelection";
import AffirmationDisplay from "./components/AffirmationDisplay";
import Chatbot from "./components/Chatbot";
import Journal from "./components/Journal"; // ✅ Import Journal component

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MoodSelection />} />
          <Route path="/affirmations" element={<AffirmationDisplay />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/journal" element={<Journal />} /> {/* ✅ Add Journal route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
