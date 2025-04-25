import { useState } from "react";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [affirmation, setAffirmation] = useState("");

  function handleSaveEntry() {
    if (affirmation.trim()) {
      setEntries([...entries, { id: Date.now(), text: affirmation }]);
      setAffirmation("");
    }
  }

  function handleEditEntry(id) {
    const newText = prompt("Edit your affirmation:");
    if (newText) {
      setEntries(
        entries.map((entry) =>
          entry.id === id ? { ...entry, text: newText } : entry
        )
      );
    }
  }

  function handleDeleteEntry(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  return (
    <div className="max-w-md mx-auto p-6 text-center bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Affirmation Journal</h2>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Write an affirmation..."
        value={affirmation}
        onChange={(e) => setAffirmation(e.target.value)}
      />
      <button
        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSaveEntry}
      >
        Save Affirmation
      </button>

      <div className="mt-4 text-left">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white text-blue-500 p-2 rounded-lg shadow-md mt-2 flex justify-between"
          >
            <span>{entry.text}</span>
            <div>
              <button
                className="text-green-500 mx-2"
                onClick={() => handleEditEntry(entry.id)}
              >
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDeleteEntry(entry.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
