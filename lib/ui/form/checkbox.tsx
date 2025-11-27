import { TouchableOpacity, View } from "react-native";

import { Flex } from "../flex";
import { Icon } from "../icon";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { useDisabledStyles } from "../theme/default-styles";
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
  const styles = useStyles();
  const disabledStyles = useDisabledStyles();

  return (
    <Flex direction="column" gap="xs">
      <TouchableOpacity onPress={() => onChange(!checked)} disabled={disabled}>
        <Flex direction="row" align="center" gap="xs">
          <View style={styles.iconContainer}>
            {checked && (
              <View
                style={[
                  styles.iconBackground,
                  disabled && { backgroundColor: "transparent" },
                ]}
              />
            )}
            <Icon
              type="material"
              name={checked ? "check-box" : "check-box-outline-blank"}
              color={
                checked ? styles.iconChecked.color : styles.iconUnchecked.color
              }
              style={[disabled && disabledStyles.text]}
            />
          </View>

          {label && (
            <Text style={[styles.label, disabled && disabledStyles.text]}>
              {label}
            </Text>
          )}
        </Flex>
      </TouchableOpacity>

      <FieldErrors errors={errors} />
    </Flex>
  );
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  iconContainer: {
    position: "relative",
  },
  iconBackground: {
    position: "absolute",
    width: 16,
    height: 16,
    top: 4,
    left: 4,
    backgroundColor: theme.backgroundColor["light"],
  },
  iconChecked: {
    color:
      theme.colors[theme.primaryColor][
        theme.primaryShades[colorScheme].background
      ],
  },
  iconUnchecked: {
    color:
      colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[6],
  },
  label: {
    color: theme.foregroundColor[colorScheme],
  },
}));
