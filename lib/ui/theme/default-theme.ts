// Inspired in mantine default theme: https://github.com/mantinedev/mantine/blob/bf25bdb3089cdfdaabe60c2d65142fbf85d77b3b/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts

import { BaseTheme } from "./base-theme";
import { defaultColors as colors } from "./default-colors";

export const defaultTheme: BaseTheme = {
  // colors
  colors: colors,
  backgroundColor: {
    light: colors.gray[0],
    dark: colors.dark[5],
  },
  foregroundColor: {
    light: colors.dark[8],
    dark: colors.gray[2],
  },
  primaryColor: "blue",
  primaryShades: {
    light: {
      background: 6,
      foreground: 6,
    },
    dark: {
      background: 8,
      foreground: 2,
    },
  },

  // typography
  fontFamily: "Roboto",
  baseFontSize: 15, // React Native default
  defaultFontSize: "md", // baseFontSize

  // borders
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
  defaultRadius: "lg",

  // spacing
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 32,
  },
  defaultSpacing: "md",
};
