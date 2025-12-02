import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

import { useTheme } from "../theme";

const IconMap = {
  material: MaterialIcons,
  "material-community": MaterialCommunityIcons,
};

export type IconType =
  | {
      type: "material";
      name: keyof typeof MaterialIcons.glyphMap;
    }
  | {
      type: "material-community";
      name: keyof typeof MaterialCommunityIcons.glyphMap;
    };

type IconProps = {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
} & IconType;

export function Icon({ type, name, size = 24, color, style }: IconProps) {
  const { theme } = useTheme();

  // @ts-ignore
  const IconComponent = IconMap[type];

  return (
    <IconComponent
      name={name as any}
      size={size}
      color={color ? color : theme.colors.foreground("auto")}
      style={style}
    />
  );
}
