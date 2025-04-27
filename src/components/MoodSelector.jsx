const MoodSelector = ({ onSelect }) => {
  const moods = [
    { id: 'happy', label: 'Happy', emoji: '😊' },
    { id: 'calm', label: 'Calm', emoji: '😌' },
    { id: 'sad', label: 'Sad', emoji: '😢' },
    { id: 'anxious', label: 'Anxious', emoji: '😰' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {moods.map((mood) => (
        <button
          key={mood.id}
          className="bg-white p-4 rounded-lg shadow-md hover:bg-green-100 transition"
          onClick={() => onSelect(mood.id)}
        >
          <span className="text-2xl block mb-1">{mood.emoji}</span>
          <span>{mood.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;