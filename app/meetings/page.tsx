"use client";

import { useState } from "react";
import MeetingForm from "../components/MeetingForm";
import MeetingList from "../components/MeetingList";
import { Meeting } from "../types";

const MeetingsPage = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  const handleMeetingSubmit = (meeting: Omit<Meeting, "id">) => {
    const newMeeting = { ...meeting, id: Date.now() };
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
  };

  const handleDeleteMeeting = (id: number) => {
    setMeetings((prevMeetings) =>
      prevMeetings.filter((meeting) => meeting.id !== id)
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-400 to-blue-300 opacity-90 z-0" />
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#e0c3fc", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8ec5fc", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,192L1440,96L1440,320L0,320Z"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 p-6">
        <h1 className="text-4xl text-white font-semibold text-center mb-10">
          Meetings
        </h1>

        <section className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white mb-4">Schedule a Meeting</h2>
          <MeetingForm onSubmit={handleMeetingSubmit} />
          <h3 className="text-xl text-white mt-6">Scheduled Meetings</h3>
          <MeetingList meetings={meetings} onDelete={handleDeleteMeeting} />
        </section>
      </div>
    </div>
  );
};

export default MeetingsPage;
