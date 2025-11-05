import { Stack } from "expo-router";

import { ScreenWrapper, Text } from "@/lib/ui";

export default function _screen() {
  return (
    <ScreenWrapper.Fullscreen>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />

      <Text>_screen</Text>
    </ScreenWrapper.Fullscreen>
  );
}
