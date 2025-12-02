import { BaseTheme } from "./base-theme";
import { defaultColors } from "./default-colors";
import { sizeToFontSize } from "./theme-helpers";

export const buildTheme = (
  baseTheme: BaseTheme,
  activeColorScheme: "light" | "dark"
) => {
  return {
    // active color scheme
    colorScheme: activeColorScheme,

    colors: {
      /**
       * Returns theme background for a given color scheme.
       * @param colorScheme "light" | "dark", "auto" refers to current/active color scheme.
       * @returns theme background color.
       */
      background: (colorScheme: "light" | "dark" | "auto") => {
        return baseTheme.backgroundColor[
          colorScheme === "auto" ? activeColorScheme : colorScheme
        ];
      },

      /**
       * Returns theme foreground for a given color scheme.
       * @param colorScheme "light" | "dark", "auto" refers to current/active color scheme.
       * @returns theme foreground color.
       */
      foreground: (colorScheme: "light" | "dark" | "auto") => {
        return baseTheme.foregroundColor[
          colorScheme === "auto" ? activeColorScheme : colorScheme
        ];
      },

      /**
       * Given a color key and an optional shade, returns a color.
       * @param key color key or "primary", defaults to "primary".
       * @param shade shade can be:
       *                number (0 to 9),
       *                "background" primary shade for current color scheme,
       *                "foreground" primary shade for current color scheme (default),
       *                [lightShade: number, darkShade: number] for specific shades for each color scheme.
       * @returns returns a color string from theme colors.
       */
      get: (
        key: keyof typeof defaultColors | "primary",
        shade?:
          | number
          | "background"
          | "foreground"
          | [lightShade: number, darkShade: number]
      ) => {
        const k = key ?? "primary";
        const c =
          k === "primary"
            ? baseTheme.colors[baseTheme.primaryColor]
            : baseTheme.colors[k];

        let s: number = baseTheme.primaryShades[activeColorScheme].foreground;

        if (typeof shade === "number") {
          s = shade;
        } else if (typeof shade === "string") {
          s = baseTheme.primaryShades[activeColorScheme][shade];
        } else if (Array.isArray(shade)) {
          s = shade[activeColorScheme === "light" ? 0 : 1];
        }

        return c[s];
      },

      /**
       * Select between two different colors based on current color scheme.
       * @param lightColor Color to use when color scheme is "light".
       * @param darkColor Color to use when color scheme is "dark".
       * @returns Selected color based on current color scheme.
       */
      select: (lightColor: string, darkColor: string) => {
        return activeColorScheme === "light" ? lightColor : darkColor;
      },
    },

    /**
     * Converts a radius key to a numeric radius.
     * @param key standardized radius key.
     * @returns numeric radius.
     */
    radius: (key: keyof BaseTheme["radius"] | "default") => {
      return baseTheme.radius[
        key === "default" ? baseTheme.defaultRadius : key
      ];
    },

    /**
     * Converts a spacing key to a numeric spacing.
     * @param key standardized spacing key.
     * @returns numeric spacing.
     */
    spacing: (key: keyof BaseTheme["spacing"] | "default") => {
      return baseTheme.spacing[
        key === "default" ? baseTheme.defaultSpacing : key
      ];
    },

    /**
     * Converts a size key to a numeric fontSize.
     * @param size standardized size key.
     * @returns numeric fontSize.
     */
    fontSize: (size: "xs" | "sm" | "md" | "lg" | "xl" | "default") => {
      return sizeToFontSize(
        baseTheme,
        size === "default" ? baseTheme.defaultFontSize : size
      );
    },

    // theme font family
    fontFamily: baseTheme.fontFamily,
  };
};
