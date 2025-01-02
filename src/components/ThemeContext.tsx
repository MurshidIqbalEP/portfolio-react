import React, { createContext, useState, useEffect } from "react";

// Define the type for the context value
interface ThemeContextType {
  theme: string;
}

// Provide a default value
const ThemeContext = createContext<ThemeContextType>({ theme: "dark" });

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme] = useState("dark"); // The default theme is "dark"

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
