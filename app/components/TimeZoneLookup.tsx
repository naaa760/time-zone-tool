// app/components/Timezone.tsx

"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from "react";
import { TimezoneData } from "../types"; // Import the TimezoneData type

const Timezone: React.FC = () => {
  const [timezoneData, setTimezoneData] = useState<TimezoneData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimezoneData = async () => {
      try {
        const response = await fetch("https://worldtimeapi.org/api/ip"); // Example API
        const data: TimezoneData = await response.json(); // Specify the type
        setTimezoneData(data);
      } catch (error) {
        setError("Failed to fetch timezone data.");
      }
    };

    fetchTimezoneData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!timezoneData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Timezone: {timezoneData.timezone}</h1>
      <p>Current DateTime: {timezoneData.datetime}</p>
    </div>
  );
};

export default Timezone;
