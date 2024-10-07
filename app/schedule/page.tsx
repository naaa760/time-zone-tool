"use client";

import { useState, useEffect } from "react";

// Define the structure of a meeting
interface Meeting {
  id: number;
  title: string;
  participants: string[];
  timeZone: string;
  scheduledTime: string;
}

const SchedulePage = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]); // Use the Meeting type
  const [form, setForm] = useState({
    title: "",
    participants: "",
    timeZone: "",
    scheduledTime: "",
  });

  // Fetch meetings on page load
  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch("/api/schedule");
      const data: Meeting[] = await response.json(); // Cast the response data to Meeting[]
      setMeetings(data);
    };
    fetchMeetings();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        participants: form.participants.split(",").map((p) => p.trim()),
      }),
    });

    const newMeeting: Meeting = await response.json(); // Cast the new meeting to Meeting type
    setMeetings([...meetings, newMeeting]);
    setForm({ title: "", participants: "", timeZone: "", scheduledTime: "" });
  };

  // Handle deletion of a meeting
  const handleDelete = async (id: number) => {
    await fetch(`/api/schedule?id=${id}`, { method: "DELETE" });
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  return (
    <div>
      <h1>Schedule a Meeting</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meeting Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Participants (comma-separated)"
          value={form.participants}
          onChange={(e) => setForm({ ...form, participants: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time Zone"
          value={form.timeZone}
          onChange={(e) => setForm({ ...form, timeZone: e.target.value })}
        />
        <input
          type="datetime-local"
          placeholder="Scheduled Time"
          value={form.scheduledTime}
          onChange={(e) => setForm({ ...form, scheduledTime: e.target.value })}
        />
        <button type="submit">Schedule</button>
      </form>

      <h2>Scheduled Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            {meeting.title} with {meeting.participants.join(", ")} at{" "}
            {meeting.scheduledTime} ({meeting.timeZone})
            <button onClick={() => handleDelete(meeting.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePage;
