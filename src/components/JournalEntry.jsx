import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const JournalEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/journals', {
        title,
        content,
        date: new Date().toISOString()
      });
      
      Swal.fire({
        title: 'Success!',
        text: 'Journal entry saved successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      setTitle('');
      setContent('');
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to save journal entry',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="content">
            Your Thoughts
          </label>
          <textarea
            id="content"
            className="w-full p-2 border border-gray-300 rounded h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default JournalEntry;