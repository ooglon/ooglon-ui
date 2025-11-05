import { ColorValue, Text as RNText, StyleProp, TextStyle } from "react-native";

import { useTheme } from "../theme";

type TextProps = {
  children: React.ReactNode;
  c?: ColorValue;
  fz?: number;
  fw?: TextStyle["fontWeight"];
  fs?: TextStyle["fontStyle"];
  ta?: TextStyle["textAlign"];
  style?: StyleProp<TextStyle>;
};

export default function Text({
  children,
  c,
  fz,
  fw,
  fs,
  ta,
  style: customStyle,
}: TextProps) {
  const { theme, colorScheme } = useTheme();

  const style: StyleProp<TextStyle> = {
    color: c || theme.foregroundColor[colorScheme],
    fontSize: fz || 15,
    fontWeight: fw || "normal",
    fontStyle: fs || "normal",
    textAlign: ta || "left",
    fontFamily: theme.fontFamily,
  };

  return <RNText style={[style, customStyle]}>{children}</RNText>;
}
