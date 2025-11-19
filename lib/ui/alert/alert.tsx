import t from "@/services/lang";
import { ButtonProps } from "../button";
import { Modal, useModal } from "../modal";
import { Text } from "../text";

type AlertOptions = {
  cancelable?: boolean;
  onDismiss?: () => void;
};

export const alert = (
  title: string,
  message?: string,
  buttons?: ButtonProps[],
  options?: AlertOptions
) => {
  const onPress = () => {
    useModal.getState().hideModal();

    console.log("TODO: Alert.onDismiss and cancellable is not implemented!");
    options?.onDismiss?.();
  };

  useModal.getState().showModal(
    <Modal.Windowed>
      <Modal.Header title={title} />

      <Text>{message}</Text>

      <Modal.Footer
        actions={
          buttons ?? [
            {
              title: t("OK"),
              onPress,
            },
          ]
        }
      />
    </Modal.Windowed>
  );
};
