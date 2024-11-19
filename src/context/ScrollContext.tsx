"use client";

import { createContext, useRef, ReactNode, useContext } from "react";

// Define the context interface
interface ScrollContextType {
  registerSection: (name: string | number, ref: HTMLElement | null) => void;
  scrollToSection: (name: string | number) => void;
}

// Create context with the correct type and a default value
const ScrollContext = createContext<ScrollContextType>({
  registerSection: () => {},
  scrollToSection: () => {},
});

export function ScrollProvider({ children }: { children: ReactNode }) {
  const sectionRefs = useRef<{ [key: string | number]: HTMLElement | null }>(
    {}
  );

  const registerSection = (
    name: string | number,
    ref: HTMLElement | null
  ): void => {
    sectionRefs.current[name] = ref;
  };

  const scrollToSection = (name: string | number): void => {
    sectionRefs.current[name]?.scrollIntoView({ behavior: "smooth" });
  };

  // Create the value object with the correct type
  const contextValue: ScrollContextType = {
    registerSection,
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
}

// Type the custom hook to return the correct type
export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }

  return context;
};
