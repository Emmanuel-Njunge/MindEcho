import { useState } from 'react';
import { toast } from 'react-toastify';

const AffirmationsPage = ({ affirmations, setAffirmations }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    setAffirmations(affirmations.map(aff => 
      aff.id === id ? {...aff, message: editText} : aff
    ));
    setEditingId(null);
    toast.success('Affirmation updated!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this affirmation?')) {
      setAffirmations(affirmations.filter(aff => aff.id !== id));
      toast.success('Affirmation deleted!');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Your Affirmations</h1>
        
        {affirmations.map(affirmation => (
          <div key={affirmation.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between">
              <span className="font-semibold capitalize">{affirmation.mood}</span>
              <div className="flex gap-2">
                {editingId === affirmation.id ? (
                  <button 
                    onClick={() => handleSave(affirmation.id)}
                    className="text-green-600 text-sm"
                  >
                    Save
                  </button>
                ) : (
                  <button 
                    onClick={() => handleEdit(affirmation.id, affirmation.message)}
                    className="text-blue-600 text-sm"
                  >
                    Edit
                  </button>
                )}
                <button 
                  onClick={() => handleDelete(affirmation.id)}
                  className="text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            
            {editingId === affirmation.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full p-2 border rounded mt-2"
              />
            ) : (
              <p className="italic mt-2">"{affirmation.message}"</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffirmationsPage;