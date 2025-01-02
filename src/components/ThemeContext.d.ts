import React from "react";
interface ThemeContextType {
    theme: string;
}
interface ThemeProviderProps {
    children: React.ReactNode;
}
export declare function ThemeProvider({ children }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextType;
export {};
