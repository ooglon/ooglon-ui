import {
  Button,
  Card,
  Checkbox,
  Header,
  ScreenWrapper,
  TextInput,
} from "@ooglon/ooglon-ui";
import { router } from "expo-router";
import { useState } from "react";

export default function Screen() {
  const [center, setCenter] = useState(true);

  return (
    <ScreenWrapper.Fullscreen center={center}>
      <Header.Hidden />

      <Card>
        <TextInput label="Email" placeholder="email@example.com" />
        <TextInput label="Password" secureTextEntry />
        <Checkbox
          label="ScreenWrapper.FullScreen center"
          checked={center}
          onChange={setCenter}
        />
        <Button title="Login (navigate back)" onPress={() => router.back()} />
      </Card>
    </ScreenWrapper.Fullscreen>
  );
}
