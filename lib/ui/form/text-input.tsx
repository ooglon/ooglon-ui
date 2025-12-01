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

const useStyles = makeStyles(({ themeb }) => ({
  input: {
    borderWidth: 1,
    borderRadius: themeb.radius(),
    borderColor: themeb.colors.get("gray").shade(4, 6),
    padding: themeb.spacing("md"),
    color: themeb.colors.get("gray").shade(8, 2),
  },
}));
