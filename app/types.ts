export interface Meeting {
  id: number;
  title: string;
  participants: string[];
  scheduledTime: string; // Adjust this based on your actual requirements
}

// app/types.ts

export interface TimezoneData {
  timezone: string;
  datetime: string; // Adjust type if needed
}

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string; // ISO string format
  timeZone: string; // User's time zone
  participants: string[]; // List of participants
}

export interface Event extends Task {
  isRecurring: boolean; // To support recurring events
}
