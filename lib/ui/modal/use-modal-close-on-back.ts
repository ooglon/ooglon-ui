import { usePreventRemove } from "@react-navigation/native";
import { useEffect } from "react";
import { BackHandler, NativeEventSubscription } from "react-native";

import { useModal } from "./use-modal";

/**
 * This hook intercepts the Back Button press and closes the modal when it's open instead of triggering the default navigate back behavior.
 */
export default function useModalCloseOnBack() {
  const modal = useModal();
  const isModalVisible = modal.content !== undefined;

  const handleBackPress = () => {
    if (modal.options.closeable) {
      modal.hideModal();
    }

    return true;
  };

  // Use usePreventRemove for React Navigation Header Back Button
  usePreventRemove(isModalVisible, handleBackPress);

  // Deal BackHandler for Android Physical Back Button and Swipe Back gesture
  useEffect(() => {
    let backHandler: NativeEventSubscription;

    if (isModalVisible) {
      backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );
    }

    return () => {
      backHandler?.remove();
    };
  }, [isModalVisible, handleBackPress]);
}
