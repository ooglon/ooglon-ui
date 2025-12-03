import { Dimensions, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { PropsWithChildren } from "react";
import { Flex } from "../../flex";
import { makeStyles } from "../../theme";

type WindowedOverlayProps = {
  centered?: boolean;
  keyboardAware?: boolean;
} & PropsWithChildren;

export default function WindowedOverlay({
  centered = false,
  keyboardAware = true,
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
      {keyboardAware ? (
        <KeyboardAwareScrollView>
          <Flex gap="md">{children}</Flex>
        </KeyboardAwareScrollView>
      ) : (
        <Flex gap="md">{children}</Flex>
      )}
    </Pressable>
  );
}

const V_OFFSET = 64;

const useStyles = makeStyles((theme, props: { centered: boolean }) => ({
  container: {
    backgroundColor: theme.colors.background("auto"),
    padding: theme.spacing("default"),
    cursor: "auto",
    borderRadius: theme.radius("default"),
    margin: 16,
    minWidth: Math.min(
      Dimensions.get("window").width - theme.spacing("default") * 4,
      380
    ),
    maxWidth: Dimensions.get("window").width - theme.spacing("default") * 4,
    maxHeight: Dimensions.get("window").height - V_OFFSET * 2,
    position: props.centered ? undefined : "absolute",
    top: props.centered ? undefined : V_OFFSET,
  },
}));
