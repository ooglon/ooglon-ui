import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { makeStyles } from "../theme";

type FullscreenProps = {
  center?: boolean;
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
} & PropsWithChildren;

export default function Fullscreen({
  children,
  center = false,
  padding = "xl",
}: FullscreenProps) {
  const styles = useStyles({ padding, center });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "padding"}
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
}

const useStyles = makeStyles(
  (
    { theme, colorScheme },
    props: {
      center: boolean;
      padding: "xs" | "sm" | "md" | "lg" | "xl" | "none";
    }
  ) => ({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor[colorScheme],
      padding:
        props.padding !== "none" ? theme.spacing[props.padding] : undefined,
      justifyContent: props.center ? "center" : undefined,
      alignItems: props.center ? "center" : undefined,
    },
  })
);
