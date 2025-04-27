import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const JournalPage = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get('http://localhost:3001/journals');
        setJournals(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch journal entries');
        setLoading(false);
      }
    };
    
    fetchJournals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/journals/${id}`);
      setJournals(journals.filter(journal => journal.id !== id));
      toast.success('Journal entry deleted successfully');
    } catch (error) {
      toast.error('Failed to delete journal entry');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Your Journal Entries</h1>
        
        {journals.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg">No journal entries yet. Create your first one!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {journals.map(journal => (
              <div key={journal.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-green-700">{journal.title}</h2>
                  <button 
                    onClick={() => handleDelete(journal.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-gray-700 mb-2">{journal.content}</p>
                <p className="text-sm text-gray-500">
                  {new Date(journal.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;