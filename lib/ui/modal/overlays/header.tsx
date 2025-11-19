import { TouchableOpacity } from "react-native";

import { Flex } from "../../flex";
import { Icon } from "../../icon";
import { Text } from "../../text";
import { makeStyles } from "../../theme";
import { useModal } from "../use-modal";

export type OverlayHeaderProps = {
  title: string;
  withCloseButton?: boolean;
};

export default function OverlayHeader({
  title,
  withCloseButton = true,
}: OverlayHeaderProps) {
  const styles = useStyles();
  const modal = useModal();

  return (
    <Flex direction="row" gap="xs" align="center" justify="space-between">
      <Text fontWeight="bold" fontSize={16}>
        {title}
      </Text>

      {withCloseButton && (
        <TouchableOpacity onPress={modal.hideModal}>
          <Icon
            type="material"
            name="close"
            color={styles.icon.color}
            size={24}
          />
        </TouchableOpacity>
      )}
    </Flex>
  );
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  icon: {
    color: theme.foregroundColor[colorScheme],
  },
}));
