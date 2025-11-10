import { TextStyle, View, ViewStyle } from "react-native";

import { Text } from "../text";
import { makeStyles } from "../theme";
import { defaultColors } from "../theme/default-colors";
import { sizeToFontSize } from "../theme/helpers";

type BadgeProps = {
  children: React.ReactNode;
  color?: keyof typeof defaultColors;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export function Badge({
  children,
  color,
  size,
  containerStyle,
  textStyle,
}: BadgeProps) {
  const styles = useStyles({ color, size });

  const childComponent =
    typeof children === "string" ? (
      <Text style={[styles.text, textStyle]}>{children}</Text>
    ) : (
      children
    );

  return (
    <View style={[styles.container, containerStyle]}>{childComponent}</View>
  );
}

const paddings = {
  xs: {
    h: 4,
    v: 2,
  },
  sm: {
    h: 6,
    v: 3,
  },
  md: {
    h: 8,
    v: 4,
  },
  lg: {
    h: 12,
    v: 6,
  },
  xl: {
    h: 16,
    v: 8,
  },
};

const useStyles = makeStyles(
  ({ theme, colorScheme }, props: Omit<BadgeProps, "children">) => ({
    container: {
      paddingVertical: paddings[props.size ?? "xs"].v,
      paddingHorizontal: paddings[props.size ?? "xs"].h,
      borderRadius: theme.radius[theme.defaultRadius] * 2,
      backgroundColor:
        theme.colors[props.color ?? theme.primaryColor][
          theme.primaryShades[colorScheme].background
        ],
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontWeight: "bold",
      fontSize: sizeToFontSize(theme, props.size ?? "md"),
      color: "#fff",
    },
  })
);
