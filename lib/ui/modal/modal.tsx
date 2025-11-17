import { Dimensions, Pressable } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { makeStyles } from "../theme";
import ModalWithHeader from "./modal-templates/with-header";
import { useModal } from "./use-modal";
import useModalCloseOnBack from "./use-modal-close-on-back";

export function Modal() {
  const styles = useStyles();
  const { content, options, hideModal } = useModal();

  useModalCloseOnBack();

  if (!content) return null;

  return (
    <Pressable
      onPress={hideModal}
      style={[
        styles.backdrop,
        options?.transparent && { backgroundColor: "transparent" },
      ]}
    >
      <Pressable
        style={styles.overlayStyle}
        onPress={(e) => {
          e.stopPropagation();
        }}
      >
        <KeyboardAwareScrollView>{content}</KeyboardAwareScrollView>
      </Pressable>
    </Pressable>
  );
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: 9000,
  },
  overlayStyle: {
    backgroundColor: theme.backgroundColor[colorScheme],
    borderRadius: 0,
    borderTopLeftRadius: theme.radius[theme.defaultRadius],
    borderTopRightRadius: theme.radius[theme.defaultRadius],
    margin: 0,
    marginTop: 64,
    width: "100%",
    flex: 1,
    padding: theme.spacing.md,
  },
}));

Modal.WithHeader = ModalWithHeader;
