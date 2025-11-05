import { Stack } from "expo-router";

import { ScreenWrapper } from "@/lib/ui";
import Text from "@/lib/ui/text";

export default function _screen() {
  return (
    <ScreenWrapper.Fullscreen>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />

      <Text>_screen</Text>
    </ScreenWrapper.Fullscreen>
  );
}
