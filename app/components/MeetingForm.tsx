import { useState, FormEvent } from "react";

// Define the type for the onSubmit prop
interface MeetingFormProps {
  onSubmit: (meeting: { title: string; participants: string[] }) => void;
}

const MeetingForm: React.FC<MeetingFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [participants, setParticipants] = useState<string>("");

  // Type the event parameter properly as FormEvent
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Ensure onSubmit receives the correct format
    onSubmit({ title, participants: participants.split(",") });

    // Clear the form after submission
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
        className="p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-500 border border-transparent focus:border-purple-500 focus:bg-opacity-20 transition duration-300"
      />
      <input
        type="text"
        placeholder="Participants (comma-separated)"
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        className="p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-500 border border-transparent focus:border-purple-500 focus:bg-opacity-20 transition duration-300"
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
