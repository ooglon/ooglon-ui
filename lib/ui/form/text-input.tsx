import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import { Flex } from "../flex";
import { Text } from "../text";
import { makeStyles } from "../theme";

type TextInputProps = {
  name: string;
  label?: string;
  error?: string;
} & RNTextInputProps;

export function TextInput({ name, label, error, ...rest }: TextInputProps) {
  const styles = useStyles();

  //   const form = useForm();

  console.log("render TextInput", rest.value);

  return (
    <Flex direction="column" gap="xs">
      {label && <Text>{label}</Text>}

      <RNTextInput
        // value={form.getFieldValue(name)}
        // onChangeText={(value) => form.setFieldValue(name, value)}
        style={styles.input}
        {...rest}
      />

      {error && <Text style={styles.error}>{error}</Text>}
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
  error: {
    color: theme.colors.red[theme.primaryShades[colorScheme].foreground],
    fontSize: theme.fontSize - 2,
  },
}));
