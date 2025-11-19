import { Dimensions, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { PropsWithChildren } from "react";
import { Flex } from "../../flex";
import { makeStyles } from "../../theme";

export default function WindowedOverlay({ children }: PropsWithChildren) {
  const styles = useStyles();

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

const useStyles = makeStyles(({ theme, colorScheme }) => ({
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
  },
}));
