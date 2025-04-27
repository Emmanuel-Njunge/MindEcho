import { useState } from 'react';
import JournalEntry from '../components/JournalEntry';

const JournalPage = ({ entries, addJournalEntry }) => {
  const [showHistory, setShowHistory] = useState(true);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-800">Your Journal</h1>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {showHistory ? 'Hide History' : 'Show History'}
          </button>
        </div>

        {showHistory && entries.length > 0 && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-green-700 mb-4">Journal History</h2>
            <div className="space-y-4">
              {entries.map((entry) => (
                <div key={entry.id} className="border-b pb-4 last:border-0">
                  <h3 className="font-semibold">{entry.title}</h3>
                  <p className="text-gray-600 my-2">{entry.content}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(entry.date).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-green-700 mb-4">New Entry</h2>
          <JournalEntry onSave={addJournalEntry} />
        </div>
      </div>
    </div>
  );
};

export default JournalPage;