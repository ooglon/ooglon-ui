import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { buildTheme } from "./build-theme";
import { defaultTheme } from "./default-theme";
import { Theme } from "./theme";

interface ThemeContextProps {
  theme: Theme;
  themeb: ReturnType<typeof buildTheme>;
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

  const themeb = useMemo(
    () => buildTheme(theme, colorScheme),
    [theme, colorScheme]
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeb,
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
