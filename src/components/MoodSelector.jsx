const MoodSelector = ({ onSelect }) => {
    const moods = [
      { id: 'happy', label: 'Happy', emoji: '😊', color: 'bg-yellow-400' },
      { id: 'calm', label: 'Calm', emoji: '😌', color: 'bg-blue-400' },
      { id: 'sad', label: 'Sad', emoji: '😢', color: 'bg-indigo-400' },
      { id: 'anxious', label: 'Anxious', emoji: '😰', color: 'bg-red-400' }
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.id}
            className={`${mood.color} p-6 rounded-lg text-white text-2xl flex flex-col items-center justify-center hover:opacity-90 transition`}
            onClick={() => onSelect(mood.id)}
          >
            <span className="text-4xl mb-2">{mood.emoji}</span>
            <span>{mood.label}</span>
          </button>
        ))}
      </div>
    );
  };
  
  export default MoodSelector;