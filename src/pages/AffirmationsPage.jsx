const AffirmationsPage = ({ affirmations }) => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Your Affirmations</h1>
        
        {affirmations.length === 0 ? (
          <p className="text-center py-8">No affirmations yet. Select a mood on the home page!</p>
        ) : (
          <div className="space-y-4">
            {affirmations.map((affirmation) => (
              <div key={affirmation.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    affirmation.mood === 'happy' ? 'bg-yellow-100 text-yellow-800' :
                    affirmation.mood === 'calm' ? 'bg-blue-100 text-blue-800' :
                    affirmation.mood === 'sad' ? 'bg-indigo-100 text-indigo-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {affirmation.mood}
                  </span>
                </div>
                <p className="mt-2 italic">"{affirmation.message}"</p>
                <p className="text-xs text-gray-500 mt-2">
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