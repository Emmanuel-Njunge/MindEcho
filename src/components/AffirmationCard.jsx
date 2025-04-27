import { useState } from 'react';
import Swal from 'sweetalert2';

const AffirmationCard = ({ affirmation, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(affirmation.message);

  const handleUpdate = () => {
    onUpdate(affirmation.id, { message: editedMessage });
    setIsEditing(false);
  };

  const confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(affirmation.id);
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-2">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          affirmation.mood === 'happy' ? 'bg-yellow-100 text-yellow-800' :
          affirmation.mood === 'calm' ? 'bg-blue-100 text-blue-800' :
          affirmation.mood === 'sad' ? 'bg-indigo-100 text-indigo-800' :
          'bg-red-100 text-red-800'
        }`}>
          {affirmation.mood}
        </span>
        <div className="flex space-x-2">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="text-green-600 hover:text-green-800"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button 
            onClick={confirmDelete}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
      
      {isEditing ? (
        <div>
          <textarea
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm"
          >
            Save
          </button>
        </div>
      ) : (
        <p className="text-lg italic">"{affirmation.message}"</p>
      )}
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Date: {new Date(affirmation.date).toLocaleDateString()}</p>
        <p>Source: {affirmation.source}</p>
      </div>
    </div>
  );
};

export default AffirmationCard;