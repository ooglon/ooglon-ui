import { useState } from "react";
import {
  Pressable,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import t from "@/services/lang";

import { Flex, FlexProps } from "../flex";
import { Text } from "../text";
import { makeStyles } from "../theme";

type ToggleableContentProps = {
  header?: { open: string; closed: string };
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<TextStyle>;
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
  openByDefault?: boolean;
} & FlexProps;

export function ToggleableContent({
  children,
  header = { open: t("Ver menos"), closed: t("Ver mais") },
  style,
  headerStyle,
  gap = "xs",
  openByDefault,
}: ToggleableContentProps) {
  const styles = useStyles();
  const [open, setOpen] = useState(openByDefault ?? false);

  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        setOpen(!open);
      }}
    >
      <Flex gap={gap}>
        <Text
          fontSize={11}
          textAlign="center"
          style={[styles.header, headerStyle]}
        >
          {open ? header.open : header.closed}
        </Text>

        <Pressable>
          <Flex gap={gap}>{open && children}</Flex>
        </Pressable>
      </Flex>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.colors.get("gray", [6, 5]),
  },
}));
