import { defaultColors } from "./default-colors";
import { sizeToFontSize } from "./helpers";
import { Theme } from "./theme";

export const buildTheme = (theme: Theme, colorScheme: "light" | "dark") => {
  return {
    ...theme,
    colorScheme,
    colors: {
      background: theme.backgroundColor[colorScheme],
      foreground: theme.foregroundColor[colorScheme],
      /**
       * Given a color key, returns a color object with background an foreground variants for current color scheme. A shade function is also included to return a specific shade for each color scheme.
       * @param key color key or "primary", defaults to "primary"
       * @returns color object with background, foreground and a shade function.
       */
      get: (key?: keyof typeof defaultColors | "primary") => {
        const k = key ?? "primary";
        const c =
          k === "primary" ? theme.colors[theme.primaryColor] : theme.colors[k];

        return {
          background: c[theme.primaryShades[colorScheme].background],
          foreground: c[theme.primaryShades[colorScheme].foreground],
          /**
           * Returns a specific shade for each color scheme.
           * @param light Shade for light color scheme.
           * @param dark Shade for dark color scheme.
           * @returns Shaded color.
           */
          shade: (light: number, dark: number) =>
            c[colorScheme === "light" ? light : dark],
        };
      },
      /**
       * Select between two different colors based on current color scheme.
       * @param lightColor Color to use when color scheme is "light".
       * @param darkColor Color to use when color scheme is "dark".
       * @returns Selected color based on current color scheme.
       */
      select: (lightColor: string, darkColor: string) => {
        return colorScheme === "light" ? lightColor : darkColor;
      },
      raw: defaultColors,
    },
    /**
     * Converts a radius key to a numeric radius.
     * @param key optional radius key, defaults to "defaultRadius"
     * @returns numeric radius
     */
    radius: (key?: keyof Theme["radius"]) => {
      return theme.radius[key ?? theme.defaultRadius];
    },
    /**
     * Converts a spacing key to a numeric spacing.
     * @param key optional spacing key, defaults to "md"
     * @returns numeric spacing
     */
    spacing: (key?: keyof Theme["spacing"]) => {
      return theme.spacing[key ?? "md"];
    },
    /**
     * Converts a size key to a numeric fontSize.
     * @param size optional standardized size key, defaults to "md" (defaultFontSize)
     * @returns numeric fontSize
     */
    fontSize: (size?: "xs" | "sm" | "md" | "lg" | "xl") => {
      return sizeToFontSize(theme, size ?? "md");
    },
  };
};
