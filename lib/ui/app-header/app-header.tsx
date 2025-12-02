//@ts-ignore
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Pressable, View } from "react-native";

import { Icon } from "../icon";
import { Text } from "../text";
import { makeStyles, useTheme } from "../theme";
import { useShadowStyle } from "../theme/default-styles";
import { HEADER_HEIGHT } from "./constants";
import HeaderMenu from "./menu";

export function AppHeader(props: NativeStackHeaderProps) {
  const { theme } = useTheme();
  const styles = useStyles();
  const { defaultShadow } = useShadowStyle();

  return (
    <View style={styles.container}>
      <StatusBar style={theme.colorScheme === "dark" ? "light" : "dark"} />

      <View style={[styles.inner, defaultShadow]}>
        {props.navigation.canGoBack() && props.options.headerBackVisible ? (
          <Pressable
            onPress={() => props.navigation.goBack()}
            style={styles.back}
          >
            <Icon type="material" name="chevron-left" />
          </Pressable>
        ) : (
          <View />
        )}

        <Text
          fontWeight="bold"
          fontSize={theme.fontSize("default") + 2}
          style={styles.title}
        >
          {props.options.title}
        </Text>

        {props.options.headerRight?.({
          canGoBack: props.navigation.canGoBack(),
        })}
      </View>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: { backgroundColor: theme.colors.background("auto") },
  inner: {
    borderBottomLeftRadius: theme.radius("default"),
    borderBottomRightRadius: theme.radius("default"),
    backgroundColor: theme.colors.select("white", theme.colors.get("dark", 4)),
    height: HEADER_HEIGHT,
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
  },
  back: { marginRight: 16 },
}));

AppHeader.Menu = HeaderMenu;
