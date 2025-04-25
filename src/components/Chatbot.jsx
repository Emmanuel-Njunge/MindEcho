import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");

  async function handleSendMessage() {
    if (!userMessage.trim()) return;

    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4",
        messages: [{ role: "user", content: userMessage }]
      }, {
        headers: {
          "Authorization": `Bearer YOUR_API_KEY`,
          "Content-Type": "application/json"
        }
      });

      setBotResponse(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setBotResponse("I'm here to support you. Take a deep breath and know that you're not alone.");
    }

    setUserMessage(""); 
  }

  return (
    <div className="max-w-md mx-auto p-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-extrabold mb-4 animate-pulse">MindEcho AI Chatbot</h2>

      <input
        type="text"
        className="w-full p-3 border border-white rounded-lg shadow-md text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Type a message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      
      <button
        className="mt-3 bg-white text-blue-500 py-2 px-4 rounded-lg font-bold hover:bg-purple-500 hover:text-white transition duration-300 shadow-md"
        onClick={handleSendMessage}
      >
        Send
      </button>

      {botResponse && (
        <p className="mt-4 text-lg font-semibold bg-white text-blue-500 p-3 rounded-lg shadow-md animate-fadeIn">
          {botResponse}
        </p>
      )}
    </div>
  );
}
