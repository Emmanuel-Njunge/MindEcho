import { useState } from "react";
import AffirmationDisplay from "./AffirmationDisplay";

export default function MoodSelection() {
  const [selectedMood, setSelectedMood] = useState("");

  function handleMoodClick(mood) {
    setSelectedMood(mood);
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">How are you feeling?</h2>
      <div className="grid grid-cols-2 gap-6">
        {["Happy", "Calm", "Sad", "Anxious"].map((mood) => (
          <button
            key={mood}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl font-bold shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            onClick={() => handleMoodClick(mood)}
          >
            {mood}
          </button>
        ))}
      </div>

      {selectedMood && <AffirmationDisplay mood={selectedMood} />}
    </div>
  );
}
