"use client";

import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Task } from "../types";

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskSubmit = (task: Omit<Task, "id">) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, id: Date.now() }, // Create a unique ID for each task
    ]);
  };

  const handleTaskDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Manage Your Tasks</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} onDelete={handleTaskDelete} />
    </div>
  );
};

export default TasksPage;
