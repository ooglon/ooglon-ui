import { Stack } from "expo-router";

import {
  Badge,
  Button,
  Card,
  Flex,
  Form,
  Icon,
  ScreenWrapper,
  Text,
  TextInput,
  ToggleableContent,
} from "@/lib/ui";

import useForm from "@/lib/ui/form/use-form";
import t from "@/services/lang";
import { z } from "zod";

export default function _screen() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validations: {
      email: z.email(t("Email inválido!")),
      password: z.string().min(6, t("Senha muito curta!")),
    },
    onSubmit: (values) => {
      console.log("Screen:", values);
    },
  });

  return (
    <ScreenWrapper.Scrollable>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />

      <Card>
        <Card.Header title="Form Card" />

        <Form>
          <TextInput
            name="username"
            label="Email"
            {...form.getInputProps("email")}
          />

          <TextInput
            name="password"
            label="Password"
            secureTextEntry
            {...form.getInputProps("password")}
          />

          <Button
            title="Submit"
            disabled={form.hasErrors}
            onPress={form.submit}
          />
        </Form>
      </Card>

      <Card>
        <Card.Header
          title="Headings Card"
          rightSection={<Badge color="red">Hot!</Badge>}
        />

        <Card.Divider />

        <Text h1 firstChild>
          Heading H1
        </Text>
        <Text textAlign="justify">
          [textAlign="justify"] Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>

        <ToggleableContent>
          <Text h2 firstChild>
            Heading H2
          </Text>
          <Text fontStyle="italic">
            [fontStyle="italic"] Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </Text>

          <Text h3>Heading H3</Text>
          <Text fontWeight="bold">
            [fontWeight="bold"] Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </Text>

          <Text h4>Heading H4</Text>
          <Text style={{ textTransform: "capitalize" }}>
            [customStyle with textTransform:"capitalize"] Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </Text>
        </ToggleableContent>
      </Card>

      <Card>
        <Card.Header
          title="Buttons Card"
          rightSection={
            <Icon type="material-community" name="dots-horizontal" />
          }
        />

        <Button
          title="Filled"
          variant="filled"
          onPress={() => console.log("pressed")}
        />

        <ToggleableContent>
          <Button
            title="Light"
            variant="light"
            onPress={() => console.log("pressed")}
          />

          <Button
            title="Outline"
            variant="outline"
            onPress={() => console.log("pressed")}
          />

          <Button
            title="Subtle"
            variant="subtle"
            onPress={() => console.log("pressed")}
          />

          <Button
            title="Button xs"
            size="xs"
            color="red"
            onPress={() => console.log("pressed")}
          />
          <Button
            title="Button sm"
            size="sm"
            color="green"
            onPress={() => console.log("pressed")}
          />
          <Button
            title="Button md"
            size="md"
            color="indigo"
            onPress={() => console.log("pressed")}
          />
          <Button
            title="Button lg"
            size="lg"
            color="yellow"
            onPress={() => console.log("pressed")}
          />
          <Button
            title="Button xl"
            size="xl"
            color="orange"
            onPress={() => console.log("pressed")}
          />

          <Flex direction="row" gap={0}>
            <Button
              title="Full Width"
              fullWidth
              onPress={() => console.log("pressed")}
            />
            <Button
              title="Custom Styles"
              size="md"
              onPress={() => console.log("pressed")}
              containerStyle={{ backgroundColor: "pink" }}
              textStyle={{ color: "black", fontWeight: "regular" }}
            />
          </Flex>

          <Button
            title="Sections"
            leftSection={<Icon type="material" name="phone" color="white" />}
            rightSection={
              <Icon
                type="material-community"
                name="dots-square"
                color="white"
              />
            }
            justify="space-between"
            onPress={() => console.log("pressed")}
          />

          <Button
            title="Disabled"
            disabled
            onPress={() => console.log("pressed")}
          />
        </ToggleableContent>
      </Card>

      <Card>
        <Card.Header title="Badges Card" />

        <Flex direction="row" wrap="wrap" align="center">
          <Badge size="xs" color="green">
            XS
          </Badge>

          <Badge size="sm" color="lime">
            SM
          </Badge>

          <Badge size="md" color="blue">
            MD
          </Badge>

          <Badge size="lg" color="yellow">
            LG
          </Badge>

          <Badge size="xl" color="orange">
            XL
          </Badge>

          <Badge color="red">
            <Icon type="material" name="notification-add" color="white" />
          </Badge>
        </Flex>
      </Card>
    </ScreenWrapper.Scrollable>
  );
}
