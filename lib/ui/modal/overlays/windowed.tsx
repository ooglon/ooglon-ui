import { Dimensions, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { PropsWithChildren } from "react";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { Flex } from "../../flex";
import { makeStyles } from "../../theme";

type WindowedOverlayProps = {
  keyboardAware?: boolean;
} & PropsWithChildren;

export default function WindowedOverlay({
  keyboardAware = true,
  children,
}: WindowedOverlayProps) {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });

  if (keyboardAware)
    return (
      <KeyboardAwareScrollView
        bottomOffset={insets.bottom}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
          }}
        >
          <Flex gap="md">{children}</Flex>
        </Pressable>
      </KeyboardAwareScrollView>
    );

  return (
    <Pressable
      style={[styles.container, styles.contentContainer]}
      onPress={(e) => {
        e.stopPropagation();
      }}
    >
      <Flex gap="md">{children}</Flex>
    </Pressable>
  );
}

const V_OFFSET = 64;

const useStyles = makeStyles((theme, props: { insets: EdgeInsets }) => ({
  container: {
    position: "absolute",
    top: V_OFFSET,
    marginHorizontal: theme.spacing("default"),
    width: Dimensions.get("window").width - theme.spacing("default") * 2,
    maxHeight: Dimensions.get("window").height - V_OFFSET - props.insets.top,
    backgroundColor: theme.colors.background("auto"),
    borderRadius: theme.radius("default"),
    cursor: "auto",
  },
  contentContainer: {
    padding: theme.spacing("default"),
    paddingBottom: props.insets.bottom,
  },
}));
