import { useState, useEffect } from 'react';
import axios from 'axios';
import AffirmationCard from '../components/AffirmationCard';
import { toast } from 'react-toastify';

const AffirmationsPage = () => {
  const [affirmations, setAffirmations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAffirmations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/affirmations');
        setAffirmations(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch affirmations');
        setLoading(false);
      }
    };
    
    fetchAffirmations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/affirmations/${id}`);
      setAffirmations(affirmations.filter(aff => aff.id !== id));
      toast.success('Affirmation deleted successfully');
    } catch (error) {
      toast.error('Failed to delete affirmation');
    }
  };

  const handleUpdate = async (id, updatedAffirmation) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/affirmations/${id}`,
        updatedAffirmation
      );
      
      setAffirmations(affirmations.map(aff => 
        aff.id === id ? response.data : aff
      ));
      toast.success('Affirmation updated successfully');
    } catch (error) {
      toast.error('Failed to update affirmation');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Your Affirmations</h1>
        
        {affirmations.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg">No affirmations yet. Create some on the home page!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {affirmations.map(affirmation => (
              <AffirmationCard
                key={affirmation.id}
                affirmation={affirmation}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AffirmationsPage;