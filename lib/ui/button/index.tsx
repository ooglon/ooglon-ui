import { ReactNode } from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import { Flex } from "../flex";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { defaultColors } from "../theme/default-colors";
import { useDisabledStyles } from "../theme/default-styles";
import { hexToRgba } from "../theme/helpers";

export type ButtonProps = {
  title: string;
  variant?: "filled" | "light" | "outline" | "subtle";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: keyof typeof defaultColors;
  fullWidth?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  justify?: "flex-start" | "flex-end" | "center" | "space-between";
  disabled?: boolean;
} & Omit<TouchableOpacityProps, "style">;

export function Button({
  title,
  variant = "filled",
  size = "md",
  color,
  fullWidth = false,
  containerStyle,
  textStyle,
  leftSection,
  rightSection,
  justify,
  disabled = false,
  ...rest
}: ButtonProps) {
  const styles = useStyles({ variant, size, color, fullWidth });
  const disabledStyles = useDisabledStyles();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[variant],
        disabled && disabledStyles.button,
        containerStyle,
      ]}
      disabled={disabled}
      {...rest}
    >
      <Flex direction="row" align="center" justify={justify ?? "center"}>
        {leftSection}

        <Text
          style={[
            styles.text,
            styles[`${variant}Text`],
            disabled && disabledStyles.text,
            textStyle,
          ]}
        >
          {title}
        </Text>

        {rightSection}
      </Flex>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles(
  ({ themeb }, props: Omit<ButtonProps, "title">) => ({
    // base
    container: {
      padding: themeb.spacing(props.size),
      borderRadius: themeb.radius(),
      flexGrow: props.fullWidth ? 1 : undefined,
    },
    text: {
      fontWeight: "bold",
      fontSize: themeb.fontSize(props.size),
    },
    // variants
    filled: {
      backgroundColor: themeb.colors.get(props.color).background,
    },
    filledText: {
      color: "#fff",
    },
    light: {
      backgroundColor: hexToRgba(
        themeb.colors.get(props.color).background,
        themeb.colorScheme === "dark" ? 0.15 : 0.1
      ),
    },
    lightText: {
      color: themeb.colors.get(props.color).foreground,
    },
    outline: {
      borderWidth: 1,
      borderColor: themeb.colors.get(props.color).foreground,
    },
    outlineText: {
      color: themeb.colors.get(props.color).foreground,
    },
    subtle: {
      backgroundColor: "transparent",
    },
    subtleText: {
      color: themeb.colors.get(props.color).foreground,
    },
  })
);
