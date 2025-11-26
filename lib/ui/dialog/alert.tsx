import t from "@/services/lang";

import { Modal, useModal } from "../modal";
import { Text } from "../text";
import { defaultColors } from "../theme/default-colors";

type Options = {
  actionLabel?: string;
  actionColor?: keyof typeof defaultColors;
  onDismiss?: () => void;
};

export const alert = (title: string, message: string, options?: Options) => {
  useModal.getState().showModal(
    <Modal.Windowed>
      <Modal.Header title={title} />

      <Text>{message}</Text>

      <Modal.Footer
        actions={[
          {
            title: options?.actionLabel ?? t("OK"),
            color: options?.actionColor,
            onPress: useModal.getState().hideModal,
          },
        ]}
      />
    </Modal.Windowed>,
    {
      onDismiss: options?.onDismiss,
    }
  );
};
