import { useMemo } from "react";
import { StyleSheet } from "react-native";

import { Theme } from "./theme";
import { useTheme } from "./theme-context";

interface UseThemeProps {
  theme: Theme;
  colorScheme: "light" | "dark";
}

// This function is based on RNEUI makeStyles. Usage is the same.
export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles: T | ((theme: UseThemeProps, props: V) => T)
  ) =>
  (props?: V): T => {
    const theme = useTheme();

    return useMemo(() => {
      const css =
        typeof styles === "function"
          ? styles(theme, props ?? ({} as any))
          : styles;
      return StyleSheet.create(css);
    }, [props, theme]);
  };
