import { Dimensions, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { PropsWithChildren } from "react";
import { Flex } from "../../flex";
import { makeStyles } from "../../theme";

type WindowedOverlayProps = {
  centered?: boolean;
} & PropsWithChildren;

export default function WindowedOverlay({
  centered = false,
  children,
}: WindowedOverlayProps) {
  const styles = useStyles({ centered });

  return (
    <Pressable
      style={[styles.container]}
      onPress={(e) => {
        e.stopPropagation();
      }}
    >
      <KeyboardAwareScrollView>
        <Flex gap="md">{children}</Flex>
      </KeyboardAwareScrollView>
    </Pressable>
  );
}

const V_OFFSET = 64;

const useStyles = makeStyles(
  ({ theme, colorScheme }, props: { centered: boolean }) => ({
    container: {
      backgroundColor: theme.backgroundColor[colorScheme],
      padding: theme.spacing.md,
      cursor: "auto",
      borderRadius: theme.radius[theme.defaultRadius],
      margin: 16,
      minWidth: Math.min(
        Dimensions.get("window").width - theme.spacing.md * 4,
        380
      ),
      maxWidth: Dimensions.get("window").width - theme.spacing.md * 4,
      maxHeight: Dimensions.get("window").height - V_OFFSET * 2,
      position: props.centered ? undefined : "absolute",
      top: props.centered ? undefined : V_OFFSET,
    },
  })
);
