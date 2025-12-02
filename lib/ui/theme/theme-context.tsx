import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { BaseTheme } from "./base-theme";
import { buildTheme } from "./build-theme";
import { defaultTheme } from "./default-theme";

interface ThemeContextProps {
  theme: ReturnType<typeof buildTheme>;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
  themeOverride?: BaseTheme;
  defaultColorScheme?: "light" | "dark";
}

export function ThemeProvider({
  themeOverride,
  children,
  defaultColorScheme = "light",
}: ThemeContextProviderProps) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    defaultColorScheme
  );

  const toggleColorScheme = () => {
    setColorScheme((val) => (val === "light" ? "dark" : "light"));
  };

  const baseTheme = defaultTheme; //TODO: apply overrides from themeOverride, use Partial

  const theme = useMemo(
    () => buildTheme(baseTheme, colorScheme),
    [baseTheme, colorScheme]
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
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
