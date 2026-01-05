import { AppHeader, useTheme } from "@ooglon/ooglon-ui";
import t from "../services/lang";

export default function MainMenu() {
  const { theme, toggleColorScheme } = useTheme();

  // const auth = useAuth();

  const handleLogout = async () => {
    // useAuth.getState().clear();
    // if (router.canDismiss()) {
    //   router.dismissAll();
    // }
    // router.replace("/");
  };

  return (
    <AppHeader.Menu>
      <AppHeader.Menu.User
        name="John Doe"
        avatarUrl="https://picsum.photos/200"
      />

      <AppHeader.Menu.Divider />

      <AppHeader.Menu.Item
        icon={{ type: "material", name: "home" }}
        title={t("Início")}
        onPress={() => {
          // router.push("/(auth)/staff/home");
          throw new Error("Not implemented");
        }}
      />

      <AppHeader.Menu.Item
        icon={{ type: "material", name: "person" }}
        title={t("Meu Perfil")}
        onPress={() => {
          // router.push("/(auth)/profile/profile");
          throw new Error("Not implemented");
        }}
      />

      <AppHeader.Menu.Item
        icon={{ type: "material", name: "comment" }}
        title={t("Opine sobre o App")}
        onPress={() => {
          // router.push("/(auth)/user-feedback");
          throw new Error("Not implemented");
        }}
      />

      <AppHeader.Menu.Item
        icon={
          theme.colorScheme === "dark"
            ? { type: "material-community", name: "moon-waning-crescent" }
            : { type: "material", name: "sunny" }
        }
        title={t("Trocar Tema")}
        onPress={toggleColorScheme}
      />

      <AppHeader.Menu.Item
        icon={{ type: "material", name: "logout" }}
        title={t("Sair")}
        onPress={handleLogout}
      />
    </AppHeader.Menu>
  );
}
