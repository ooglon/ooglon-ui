import { type PropsWithChildren } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Flex } from "../flex";
import { makeStyles, useTheme } from "../theme";

type FullscreenProps = {
  center?: boolean;
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
} & PropsWithChildren;

export default function Fullscreen({
  children,
  center = false,
  padding,
  gap,
}: FullscreenProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles({ padding, center });

  return (
    <KeyboardAwareScrollView
      bottomOffset={insets.bottom}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Flex gap={gap ?? theme.spacing("default")} style={styles.flex}>
        {children}
      </Flex>
    </KeyboardAwareScrollView>
  );
}

const useStyles = makeStyles(
  (
    theme,
    props: {
      center: boolean;
      padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
    }
  ) => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background("auto"),
    },
    contentContainer: {
      flex: 1,
      justifyContent: props.center ? "center" : undefined,
      alignItems: props.center ? "center" : undefined,
    },
    flex: {
      width: "100%",
      padding:
        props.padding !== "none"
          ? theme.spacing(props.padding ?? "default")
          : undefined,
    },
  })
);
