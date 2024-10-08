import React from "react";

// Define types for the meeting and onDelete props
interface Meeting {
  id: string;
  title: string;
  participants: string[];
}

interface MeetingListProps {
  meetings: Meeting[];
  onDelete: (id: string) => void;
}

const MeetingList: React.FC<MeetingListProps> = ({ meetings, onDelete }) => {
  return (
    <ul className="list-disc pl-5">
      {meetings.map((meeting) => (
        <li key={meeting.id} className="mb-2">
          {meeting.title} with{" "}
          {Array.isArray(meeting.participants)
            ? meeting.participants.join(", ")
            : "No Participants"}
          <button
            onClick={() => onDelete(meeting.id)}
            className="ml-4 text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MeetingList;
