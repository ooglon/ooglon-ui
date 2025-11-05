import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

import { useTheme } from "../theme";

type FlexProps = {
  children: ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
  justify?: "flex-start" | "flex-end" | "center" | "space-between";
  shrink?: number;
  grow?: number;
} & ViewProps;

export default function Flex({
  children,
  direction = "column",
  align,
  gap,
  justify,
  shrink,
  grow,
  style,
  ...rest
}: FlexProps) {
  const { theme } = useTheme();

  const numericGap =
    gap !== undefined
      ? typeof gap === "string"
        ? theme.spacing[gap]
        : gap
      : theme.spacing.xl;

  return (
    <View
      style={[
        {
          flexDirection: direction,
          gap: numericGap,
          alignItems: align,
          justifyContent: justify,
          flexShrink: shrink,
          flexGrow: grow,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
