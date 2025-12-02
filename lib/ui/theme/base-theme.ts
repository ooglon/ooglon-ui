import { defaultColors } from "./default-colors";
import { Tuple } from "./theme-helpers";

export type BaseTheme = {
  // colors
  colors: Record<keyof typeof defaultColors, Tuple<string, 10>>;
  backgroundColor: {
    light: string;
    dark: string;
  };
  foregroundColor: {
    light: string;
    dark: string;
  };
  primaryColor: keyof typeof defaultColors;
  primaryShades: {
    light: {
      background: number;
      foreground: number;
    };
    dark: {
      background: number;
      foreground: number;
    };
  };

  // typography
  fontFamily: string;
  baseFontSize: number;
  defaultFontSize: "xs" | "sm" | "md" | "lg" | "xl";

  // borders
  radius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  defaultRadius: "xs" | "sm" | "md" | "lg" | "xl";

  // spacing
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  defaultSpacing: "xs" | "sm" | "md" | "lg" | "xl";
};
