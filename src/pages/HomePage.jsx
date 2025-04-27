import { useNavigate } from 'react-router-dom';
import MoodSelector from '../components/MoodSelector';
import JournalEntry from '../components/JournalEntry';

const HomePage = ({ addAffirmation, addJournalEntry }) => {
  const navigate = useNavigate();

  const handleMoodSelect = (mood) => {
    const affirmation = generateAffirmation(mood);
    addAffirmation({
      mood,
      message: affirmation,
      date: new Date().toISOString()
    });
    navigate('/affirmations');
  };

  const generateAffirmation = (mood) => {
    const affirmations = {
      happy: "You radiate joy and positivity!",
      calm: "Peace flows through you in this moment.",
      sad: "This feeling will pass - you are stronger than you know.",
      anxious: "Breathe deeply. You are safe right now."
    };
    return affirmations[mood];
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">How are you feeling today?</h1>
        <MoodSelector onSelect={handleMoodSelect} />
        <JournalEntry onSave={addJournalEntry} />
      </div>
    </div>
  );
};

export default HomePage;