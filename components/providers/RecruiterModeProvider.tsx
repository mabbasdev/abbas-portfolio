"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type RecruiterModeContextType = {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
};

const RecruiterModeContext = createContext<RecruiterModeContextType>({
  isRecruiterMode: false,
  toggleRecruiterMode: () => {},
});

export function RecruiterModeProvider({ children }: { children: ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("recruiterMode");
    if (stored === "true") setIsRecruiterMode(true);
  }, []);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(prev => {
      const newVal = !prev;
      localStorage.setItem("recruiterMode", String(newVal));
      return newVal;
    });
  };

  return (
    <div className={mounted && isRecruiterMode ? "recruiter-theme" : ""}>
      <RecruiterModeContext.Provider value={{ isRecruiterMode: mounted ? isRecruiterMode : false, toggleRecruiterMode }}>
        {children}
      </RecruiterModeContext.Provider>
    </div>
  );
}

export const useRecruiterMode = () => useContext(RecruiterModeContext);
