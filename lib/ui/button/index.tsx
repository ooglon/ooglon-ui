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
import { hexToRgba, sizeToFontSize } from "../theme/helpers";

type ButtonProps = {
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

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[variant],
        disabled && styles.disabled,
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
            disabled && styles.disabledText,
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
  ({ theme, colorScheme }, props: Omit<ButtonProps, "title">) => ({
    // base
    container: {
      padding: theme.spacing[props.size ?? "md"],
      borderRadius: theme.radius[theme.defaultRadius],
      flexGrow: props.fullWidth ? 1 : undefined,
    },
    text: {
      fontWeight: "bold",
      fontSize: sizeToFontSize(theme, props.size ?? "md"),
    },
    disabled: {
      opacity: 0.5,
      backgroundColor: colorScheme === "dark" ? "#555" : "#ccc",
    },
    disabledText: {
      opacity: 0.5,
      color: colorScheme === "dark" ? "#fff" : "#333",
    },
    // variants
    filled: {
      backgroundColor:
        theme.colors[props.color ?? theme.primaryColor][
          theme.primaryShades[colorScheme].background
        ],
    },
    filledText: {
      color: "#fff",
    },
    light: {
      backgroundColor: hexToRgba(
        theme.colors[props.color ?? theme.primaryColor][
          theme.primaryShades[colorScheme].background
        ],
        colorScheme === "dark" ? 0.15 : 0.1
      ),
    },
    lightText: {
      color:
        theme.colors[props.color ?? theme.primaryColor][
          theme.primaryShades[colorScheme].foreground
        ],
    },
    outline: {
      borderWidth: 1,
      borderColor:
        theme.colors[props.color ?? theme.primaryColor][
          theme.primaryShades[colorScheme].foreground
        ],
    },
    outlineText: {
      color:
        theme.colors[props.color ?? theme.primaryColor][
          theme.primaryShades[colorScheme].foreground
        ],
    },
    subtle: {
      backgroundColor: "transparent",
    },
    subtleText: {
      color:
        theme.colors[props.color ?? theme.primaryColor][
          theme.primaryShades[colorScheme].foreground
        ],
    },
  })
);
