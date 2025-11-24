import { PropsWithChildren } from "react";
import { Dimensions, Pressable } from "react-native";
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

const V_OFFSET = 64;

const useStyles = makeStyles(
  ({ theme, colorScheme }, props: { insets: EdgeInsets }) => ({
    container: {
      position: "absolute",
      bottom: 0,
      padding: theme.spacing.md,
      paddingBottom: props.insets.bottom,
      width: "100%",
      maxHeight: Dimensions.get("window").height - V_OFFSET - props.insets.top,
      backgroundColor: theme.backgroundColor[colorScheme],
      borderRadius: 0,
      borderTopLeftRadius: theme.radius[theme.defaultRadius],
      borderTopRightRadius: theme.radius[theme.defaultRadius],
      cursor: "auto",
    },
  })
);
