import { TouchableOpacity, View } from "react-native";

import { Flex } from "../flex";
import { Icon } from "../icon";
import { Text } from "../text";
import { makeStyles } from "../theme";
import FieldErrors from "./field-errors";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  errors?: string[];
  disabled?: boolean;
};

export function Checkbox({
  checked,
  onChange,
  label,
  errors,
  disabled = false,
}: CheckboxProps) {
  const styles = useStyles({ disabled });

  return (
    <Flex direction="column" gap="xs">
      <TouchableOpacity onPress={() => onChange(!checked)} disabled={disabled}>
        <Flex direction="row" align="center" gap="xs">
          <View style={styles.iconContainer}>
            {checked && <View style={styles.iconBackground} />}
            <Icon
              type="material"
              name={checked ? "check-box" : "check-box-outline-blank"}
              color={
                checked ? styles.iconChecked.color : styles.iconUnchecked.color
              }
            />
          </View>

          {label && <Text style={styles.label}>{label}</Text>}
        </Flex>
      </TouchableOpacity>

      <FieldErrors errors={errors} />
    </Flex>
  );
}

const useStyles = makeStyles(
  ({ theme, colorScheme }, props: { disabled: boolean }) => ({
    iconContainer: {
      position: "relative",
    },
    iconBackground: {
      position: "absolute",
      width: 16,
      height: 16,
      top: 4,
      left: 4,
      backgroundColor: props.disabled
        ? "transparent"
        : theme.backgroundColor["light"],
    },
    iconChecked: {
      color: props.disabled
        ? colorScheme === "light"
          ? theme.colors.gray[4]
          : theme.colors.gray[6]
        : theme.colors[theme.primaryColor][
            theme.primaryShades[colorScheme].background
          ],
    },
    iconUnchecked: {
      color:
        colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[6],
    },
    label: {
      color: props.disabled
        ? colorScheme === "light"
          ? theme.colors.gray[4]
          : theme.colors.gray[6]
        : theme.foregroundColor[colorScheme],
    },
  })
);
