import { useFocusEffect } from "expo-router";
import { PropsWithChildren, useCallback, useState } from "react";
import { Dimensions, Pressable, TouchableOpacity } from "react-native";

import { Flex } from "../../flex";
import { Icon } from "../../icon";
import { makeStyles, useTheme } from "../../theme";
import { useShadowStyle } from "../../theme/default-styles";
import { HEADER_HEIGHT } from "../constants";
import HeaderMenuDivider from "./divider";
import HeaderMenuItem from "./item";
import HeaderMenuUser from "./user";

export default function HeaderMenu({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  const styles = useStyles();
  const { defaultShadow } = useShadowStyle();

  const [visible, setVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setVisible(false);
    }, [])
  );

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        {visible ? (
          <Icon
            type="material"
            name="menu-open"
            style={styles.menuTouchable}
            size={32}
          />
        ) : (
          <Icon
            type="material"
            name="menu"
            style={styles.menuTouchable}
            size={32}
          />
        )}
      </TouchableOpacity>

      {visible && (
        <Pressable
          onPress={() => setVisible(false)}
          style={styles.backdropStyle}
        >
          <Pressable style={[styles.overlayStyle, defaultShadow]}>
            <Flex gap={theme.spacing("default")}>{children}</Flex>
          </Pressable>
        </Pressable>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  menuTouchable: {
    padding: 8,
  },
  backdropStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: theme.colors.select(
      "rgba(0, 0, 0, 0.1)",
      "rgba(0, 0, 0, 0.25)"
    ),
  },
  overlayStyle: {
    borderRadius: theme.radius("default"),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: theme.spacing("md"),
    marginTop: HEADER_HEIGHT + 8,
    backgroundColor: theme.colors.background("auto"),
  },
}));

HeaderMenu.Divider = HeaderMenuDivider;
HeaderMenu.Item = HeaderMenuItem;
HeaderMenu.User = HeaderMenuUser;
