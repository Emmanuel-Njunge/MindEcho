import { useState } from 'react';
import { toast } from 'react-toastify';
import JournalEntry from '../components/JournalEntry';

const JournalPage = ({ journalEntries, setJournalEntries }) => {
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Delete this journal entry?')) {
      setJournalEntries(journalEntries.filter(entry => entry.id !== id));
      toast.success('Entry deleted!');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Your Journal</h1>
        
        {journalEntries.map(entry => (
          <div key={entry.id} className="bg-white p-4 rounded-lg shadow mb-4">
            {editingId === entry.id ? (
              <JournalEntry
                initialEntry={entry}
                onSave={(updatedEntry) => {
                  setJournalEntries(journalEntries.map(e => 
                    e.id === entry.id ? updatedEntry : e
                  ));
                  setEditingId(null);
                }}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <>
                <div className="flex justify-between">
                  <h3 className="font-semibold">{entry.title}</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setEditingId(entry.id)}
                      className="text-blue-600 text-sm"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(entry.id)}
                      className="text-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="mt-2">{entry.content}</p>
              </>
            )}
          </div>
        ))}
        
        {!editingId && (
          <div className="mt-8 bg-white p-4 rounded-lg shadow">
            <JournalEntry 
              onSave={(newEntry) => {
                setJournalEntries([...journalEntries, {...newEntry, id: Date.now()}]);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;