import { defaultColors } from "./default-colors";

export type Theme = {
  // colors
  colors: Record<keyof typeof defaultColors, string[]>;
  backgroundColor: {
    light: string;
    dark: string;
  };
  foregroundColor: {
    light: string;
    dark: string;
  };
  primaryColor: string;
  primaryShades: {
    light: number;
    dark: number;
  };
  // typography
  fontFamily: string;
  fontSize: number;
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
};
