// app/page.tsx

"use client"; // Make sure this line is present

const HomePage = () => {
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
        <h1 className="text-5xl text-white font-bold text-center mb-10">
          Welcome to the Time Zone Coordination Tool
        </h1>

        {/* Description Section */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md text-white text-2xl p-6 rounded-lg shadow-lg text-center mb-12">
          <p>This is your hub for managing meetings, tasks, and time zones.</p>
          <p className="mt-4">
            Use the dashboard and meetings pages to get started.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 transform-gpu">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Schedule a Meeting
            </h2>
            <p className="text-gray-200 text-center">
              Organize your meetings efficiently and effectively.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 transform-gpu">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Create a Task
            </h2>
            <p className="text-gray-200 text-center">
              Keep track of your tasks and deadlines.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 transform-gpu">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Task Management
            </h2>
            <p className="text-gray-200 text-center">
              Stay organized with our intuitive task management features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
