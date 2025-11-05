import { createContext, ReactNode, useContext, useState } from "react";

import { defaultTheme } from "./default-theme";
import { Theme } from "./theme";

interface ThemeContextProps {
  theme: Theme;
  colorScheme: "light" | "dark";
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
  theme?: Theme;
  defaultColorScheme?: "light" | "dark";
}

export function ThemeProvider({
  theme = defaultTheme,
  children,
  defaultColorScheme = "light",
}: ThemeContextProviderProps) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    defaultColorScheme
  );

  const toggleColorScheme = () => {
    setColorScheme((val) => (val === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorScheme,
        toggleColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx)
    throw new Error("useTheme must be used inside ThemeContextProvider");

  return ctx;
}
