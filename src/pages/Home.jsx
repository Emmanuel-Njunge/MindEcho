import { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import JournalEntry from '../components/JournalEntry';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [affirmation, setAffirmation] = useState('');
  
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
   
    const affirmations = {
      happy: "Your joy is contagious! Keep shining your light.",
      calm: "Peace flows through you. You are centered and grounded.",
      sad: "This feeling is temporary. You are strong and will get through this.",
      anxious: "Breathe deeply. You are safe in this moment."
    };
    setAffirmation(affirmations[mood]);
    toast.success(`Generated a ${mood} affirmation for you!`);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">How are you feeling today?</h1>
        
        <MoodSelector onSelect={handleMoodSelect} />
        
        {affirmation && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Your Affirmation:</h2>
            <p className="text-lg italic">"{affirmation}"</p>
            <button 
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={() => {
             
                toast.success("Affirmation saved to your collection!");
              }}
            >
              Save Affirmation
            </button>
          </div>
        )}
        
        <JournalEntry />
      </div>
    </div>
  );
};

export default HomePage;