import { useState } from "react";

const MeetingForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, participants: participants.split(",") });
    setTitle("");
    setParticipants("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Meeting Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-transparent focus:border-purple-500 focus:bg-opacity-20 transition duration-300"
      />
      <input
        type="text"
        placeholder="Participants (comma-separated)"
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        className="p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-transparent focus:border-purple-500 focus:bg-opacity-20 transition duration-300"
      />
      <button
        type="submit"
        className="p-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 text-white"
      >
        Schedule Meeting
      </button>
    </form>
  );
};

export default MeetingForm;
