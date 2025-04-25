export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300">
        MindEcho
      </h1>

      <div className="flex space-x-6 text-lg">
        <a href="/" className="hover:text-gray-300 transition duration-300">Home</a>
        <a href="/affirmations" className="hover:text-gray-300 transition duration-300">Affirmations</a>
        <a href="/chatbot" className="hover:text-gray-300 transition duration-300">Chatbot</a>
      </div>
    </nav>
  );
}
