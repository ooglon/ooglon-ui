import { ColorValue, Text as RNText, StyleProp, TextStyle } from "react-native";

import { useTheme } from "../theme";

type TextProps = {
  children: React.ReactNode;
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  fontStyle?: TextStyle["fontStyle"];
  textAlign?: TextStyle["textAlign"];
  style?: StyleProp<TextStyle>;
};

export function Text({
  children,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  style: customStyle,
}: TextProps) {
  const { theme, colorScheme } = useTheme();

  const style: StyleProp<TextStyle> = {
    color: color || theme.foregroundColor[colorScheme],
    fontSize: fontSize || 15,
    fontWeight: fontWeight || "normal",
    fontStyle: fontStyle || "normal",
    textAlign: textAlign || "left",
    fontFamily: theme.fontFamily,
  };

  return <RNText style={[style, customStyle]}>{children}</RNText>;
}
