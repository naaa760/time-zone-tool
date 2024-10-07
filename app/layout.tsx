// app/layout.tsx

import "./global.css"; // Import global styles
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition"; // Import PageTransition
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // Define the type of children
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="sparkle">
        {" "}
        {/* Apply sparkle effect here */}
        <div className="container">
          <header>
            <h1
              style={{ textAlign: "center", color: "#fff", padding: "10px 0" }}
            >
              Time Zone Coordination Tool
            </h1>
            <Navbar />
          </header>
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <footer
            style={{
              textAlign: "center",
              padding: "20px 0",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <p>
              &copy; {new Date().getFullYear()} Time Zone Coordination Tool. All
              rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
