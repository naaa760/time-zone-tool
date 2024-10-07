// app/components/PageTransition.tsx
"use client";

import { useEffect, useState } from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    setShow(true);
    setIsEntering(true);

    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 300); // Match with the CSS transition duration

    return () => {
      clearTimeout(timer);
      setShow(false);
    };
  }, [children]);

  return (
    <div
      className={`${show ? (isEntering ? "fade-enter" : "fade-exit") : ""} ${
        isEntering ? "fade-enter-active" : "fade-exit-active"
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
