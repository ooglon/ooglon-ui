import { ReactNode, useEffect } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import t from "@/services/lang";

import { select } from "../dialog/select";
import { Flex } from "../flex";
import { Icon } from "../icon";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { useDisabledStyles } from "../theme/default-styles";
import FieldErrors from "./field-errors";

type SelectProps<T> = {
  onChange: (selected: T | string | null) => void;
  label?: string;
  errors?: string[];
  disabled?: boolean;
  defaultSelectedIndex?: number;
  allowDeselect?: boolean;
  style?: TouchableOpacityProps["style"];
} & (
  | { data: string[]; selected: string }
  | {
      data: { values: T[]; renderItem: (item: T, key: React.Key) => ReactNode };
      selected: T;
    }
);

export function Select<T>({
  data,
  selected,
  onChange,
  label,
  errors,
  disabled = false,
  defaultSelectedIndex,
  allowDeselect = false,
  style,
}: SelectProps<T>) {
  const styles = useStyles();
  const disabledStyles = useDisabledStyles();

  useEffect(() => {
    if (allowDeselect && defaultSelectedIndex === undefined) {
      return;
    }

    if (isArrayOfStrings(data)) {
      if (defaultSelectedIndex !== undefined) {
        onChange(data[defaultSelectedIndex]);
      } else {
        onChange(data[0]);
      }
    } else {
      if (defaultSelectedIndex !== undefined) {
        onChange(data.values[defaultSelectedIndex]);
      } else {
        onChange(data.values[0]);
      }
    }
  }, []);

  const openSelect = () => {
    // Dialog.select causes require cycle, so keep import from source function here.
    select(
      label || t("Select"),
      data,
      (item: T | string) => {
        onChange(item);
      },
      {
        cancelable: false,
      }
    );
  };

  return (
    <Flex direction="column" gap="xs">
      {label && <Text>{label}</Text>}

      <TouchableOpacity
        onPress={openSelect}
        disabled={disabled}
        style={[styles.input, style]}
      >
        <Flex direction="row" justify="space-between" gap="xs">
          {isArrayOfStrings(data) ? (
            <Text style={[disabled && disabledStyles.text]}>
              {selected as string}
            </Text>
          ) : (
            data.renderItem(selected as T, 0)
          )}

          <Flex direction="row" gap="xs" align="center">
            {allowDeselect && selected && (
              <TouchableOpacity
                onPress={() => onChange(null)}
                disabled={disabled}
              >
                <Icon
                  type="material"
                  name="close"
                  size={16}
                  style={[disabled && disabledStyles.text]}
                />
              </TouchableOpacity>
            )}

            <Flex gap={0}>
              <Icon
                type="material"
                name="keyboard-arrow-up"
                size={14}
                style={[{ marginBottom: -4 }, disabled && disabledStyles.text]}
              />
              <Icon
                type="material"
                name="keyboard-arrow-down"
                size={14}
                style={[{ marginTop: -4 }, disabled && disabledStyles.text]}
              />
            </Flex>
          </Flex>
        </Flex>
      </TouchableOpacity>

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

const isArrayOfStrings = (value: any): value is string[] => {
  if (!Array.isArray(value)) {
    return false;
  }

  return value.every((item) => typeof item === "string");
};
