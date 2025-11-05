import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "react-native-reanimated";

import { ThemeProvider } from "@/lib/ui";
import { AppHeader } from "@/lib/ui/header";
import MainMenu from "@/menus/main-menu";

// ----------------------------------------------------------- Root Layout:

const customFonts = {
  RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
};

function RootLayout() {
  return (
    <ThemeProvider defaultColorScheme="dark">
      <Stack
        screenOptions={{
          headerShown: false,
          header: (props: any) => <AppHeader {...props} />,
          headerRight: () => <MainMenu />,
          headerBackVisible: true,
          animation: "fade",
        }}
      />
    </ThemeProvider>
  );
}

// ----------------------------------------------------------- Expo Defaults:

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function _layout() {
  const [loaded, error] = useFonts({
    ...customFonts,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayout />;
}
