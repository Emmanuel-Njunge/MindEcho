const AffirmationsPage = ({ affirmations }) => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Your Affirmations</h1>
        
        {affirmations.length === 0 ? (
          <p>No affirmations yet. Select a mood on the home page!</p>
        ) : (
          <div className="space-y-4">
            {affirmations.map((affirmation, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold">{affirmation.mood}</p>
                <p className="italic">"{affirmation.message}"</p>
                <p className="text-sm text-gray-500">
                  {new Date(affirmation.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AffirmationsPage;