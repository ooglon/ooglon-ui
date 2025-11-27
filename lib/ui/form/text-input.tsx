import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import { Flex } from "../flex";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { useDisabledStyles } from "../theme/default-styles";
import FieldErrors from "./field-errors";

type TextInputProps = {
  label?: string;
  errors?: string[];
  disabled?: boolean;
} & RNTextInputProps;

export function TextInput({
  label,
  errors,
  disabled = false,
  ...rest
}: TextInputProps) {
  const styles = useStyles();
  const disabledStyles = useDisabledStyles();

  return (
    <Flex direction="column" gap="xs">
      {label && <Text>{label}</Text>}

      <RNTextInput
        style={[styles.input, disabled && disabledStyles.text]}
        editable={!disabled}
        {...rest}
      />

      <FieldErrors errors={errors} />
    </Flex>
  );
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  input: {
    borderWidth: 1,
    borderRadius: theme.radius[theme.defaultRadius],
    borderColor:
      colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[6],
    padding: theme.spacing.md,
    color:
      colorScheme === "light" ? theme.colors.gray[8] : theme.colors.gray[2],
  },
}));
