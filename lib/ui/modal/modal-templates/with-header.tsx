import { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";

import { Flex } from "../../flex";
import { Icon } from "../../icon";
import { Text } from "../../text";
import { makeStyles } from "../../theme";

export type WithTitleProps = {
  title: string;
  subtitle?: string;
  handleClose: () => void;
} & PropsWithChildren;

export default function ModalWithHeader({
  handleClose,
  title,
  subtitle,
  children,
}: WithTitleProps) {
  const styles = useStyles();

  return (
    <Flex>
      <TouchableOpacity onPress={handleClose} style={styles.closeIconContainer}>
        <Icon
          type="material"
          name="close"
          color={styles.closeIcon.color}
          size={24}
        />
      </TouchableOpacity>

      <Flex gap={0}>
        <Text fontWeight="bold" fontSize={16}>
          {title}
        </Text>
        {subtitle && <Text>{subtitle}</Text>}
      </Flex>

      {children}
    </Flex>
  );
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  closeIconContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  closeIcon: {
    color: theme.foregroundColor[colorScheme],
  },
}));
