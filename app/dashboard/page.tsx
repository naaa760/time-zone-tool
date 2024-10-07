"use client";

import { useState } from "react";
import MeetingForm from "../components/MeetingForm";
import MeetingList from "../components/MeetingList";
import TaskForm from "../components/TaskForm"; // Import Task Form
import TaskList from "../components/TaskList"; // Import Task List
import { Meeting } from "../types";

const DashboardPage = () => {
  // State for meetings
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  // State for tasks
  const [tasks, setTasks] = useState<
    { id: number; title: string; participants: string[]; dueDate: string }[]
  >([]);

  const handleMeetingSubmit = (meeting: Omit<Meeting, "id">) => {
    const newMeeting = { ...meeting, id: Date.now() };
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
  };

  const handleTaskSubmit = (task: {
    title: string;
    participants: string;
    dueDate: string;
  }) => {
    const newTask = {
      id: Date.now(),
      title: task.title,
      participants: task.participants.split(",").map((p) => p.trim()), // Split and trim participants
      dueDate: task.dueDate,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteMeeting = (id: number) => {
    setMeetings((prevMeetings) =>
      prevMeetings.filter((meeting) => meeting.id !== id)
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 opacity-90 z-0" />
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="dashboard-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#D8B4FE", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#A78BFA", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#dashboard-gradient)"
            d="M0,192L1440,96L1440,320L0,320Z"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 p-6">
        <h1 className="text-4xl text-white font-semibold text-center mb-10">
          Dashboard
        </h1>

        {/* Meeting Section */}
        <section className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg mb-12 backdrop-filter backdrop-blur-md">
          <h2 className="text-2xl text-white mb-4">Schedule a Meeting</h2>
          <MeetingForm onSubmit={handleMeetingSubmit} />
          <h3 className="text-xl text-white mt-6">Scheduled Meetings</h3>
          <MeetingList meetings={meetings} onDelete={handleDeleteMeeting} />
        </section>

        {/* Task Section */}
        <section className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
          <h2 className="text-2xl text-white mb-4">Create a Task</h2>
          <TaskForm onSubmit={handleTaskSubmit} />
          <h3 className="text-xl text-white mt-6">Your Tasks</h3>
          <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
