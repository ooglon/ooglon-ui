import { PropsWithChildren } from "react";
import { Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import { Flex } from "../../flex";
import { makeStyles } from "../../theme";

export default function FullscreenOverlay({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });

  return (
    <Pressable
      style={styles.container}
      onPress={(e) => {
        e.stopPropagation();
      }}
    >
      <KeyboardAwareScrollView bottomOffset={insets.bottom}>
        <Flex gap="md">{children}</Flex>
      </KeyboardAwareScrollView>
    </Pressable>
  );
}

const useStyles = makeStyles(
  ({ theme, colorScheme }, props: { insets: EdgeInsets }) => ({
    container: {
      backgroundColor: theme.backgroundColor[colorScheme],
      cursor: "auto",
      borderRadius: 0,
      borderTopLeftRadius: theme.radius[theme.defaultRadius],
      borderTopRightRadius: theme.radius[theme.defaultRadius],
      width: "100%",
      flex: 1,
      margin: 0,
      marginTop: 64 + props.insets.top,
      padding: theme.spacing.md,
      paddingBottom: props.insets.bottom,
    },
  })
);
