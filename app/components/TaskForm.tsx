import { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, participants, dueDate });
    setTitle("");
    setParticipants("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Task Title"
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
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-transparent focus:border-purple-500 focus:bg-opacity-20 transition duration-300"
      />
      <button
        type="submit"
        className="p-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 text-white"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
