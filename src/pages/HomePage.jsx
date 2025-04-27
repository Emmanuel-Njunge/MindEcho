import { useState } from 'react';
import { toast } from 'react-toastify';
import MoodSelector from '../components/MoodSelector';
import JournalEntry from '../components/JournalEntry';

const HomePage = ({ addAffirmation, addJournalEntry }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    const affirmation = generateAffirmation(mood);
    addAffirmation({
      mood,
      message: affirmation,
      date: new Date().toISOString(),
      id: Date.now() 
    });
    toast.success(`Saved your ${mood} mood!`);
  };

  const generateAffirmation = (mood) => {
    const affirmations = {
      happy: "You radiate joy and positivity!",
      calm: "Peace flows through you in this moment.",
      sad: "This feeling will pass - you are strong.",
      anxious: "Take a deep breath. You are safe."
    };
    return affirmations[mood];
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">How are you feeling today?</h1>
        <MoodSelector onSelect={handleMoodSelect} />
        
        {selectedMood && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <p className="text-lg">
              Current mood: <span className="capitalize font-semibold">{selectedMood}</span>
            </p>
          </div>
        )}
        
        <JournalEntry onSave={addJournalEntry} />
      </div>
    </div>
  );
};

export default HomePage;