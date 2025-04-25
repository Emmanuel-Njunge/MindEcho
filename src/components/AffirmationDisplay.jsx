export default function AffirmationDisplay({ mood }) {
  const affirmations = {
    Happy: "You radiate positivity!",
    Calm: "Peace flows through you.",
    Sad: "You're stronger than you think.",
    Anxious: "Breathe deeply, you are in control."
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg shadow-lg mt-6 transform hover:scale-105 transition duration-300">
      <h2 className="text-3xl font-bold mb-4 animate-pulse">Your Affirmation</h2>
      <p className="text-2xl font-medium bg-white text-blue-600 p-6 rounded-lg shadow-md animate-fadeIn">
        {affirmations[mood] || "Select a mood to receive an affirmation."}
      </p>
    </div>
  );
}
