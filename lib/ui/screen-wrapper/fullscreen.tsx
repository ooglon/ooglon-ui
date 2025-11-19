import { PropsWithChildren } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Flex } from "../flex";
import { makeStyles } from "../theme";

type FullscreenProps = {
  center?: boolean;
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
} & PropsWithChildren;

export default function Fullscreen({
  children,
  center = false,
  padding = "xl",
  gap = "xl",
}: FullscreenProps) {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ padding, center });

  return (
    <KeyboardAwareScrollView
      bottomOffset={insets.bottom}
      style={styles.container}
    >
      <Flex gap={gap} style={styles.padding}>
        {children}
      </Flex>
    </KeyboardAwareScrollView>
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
      justifyContent: props.center ? "center" : undefined,
      alignItems: props.center ? "center" : undefined,
    },
    padding: {
      padding:
        props.padding !== "none" ? theme.spacing[props.padding] : undefined,
    },
  })
);
