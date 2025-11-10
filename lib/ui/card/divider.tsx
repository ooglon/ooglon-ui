import { View } from "react-native";
import { makeStyles } from "../theme";

export default function CardDivider() {
  const styles = useStyles();

  return <View style={styles.divider} />;
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  divider: {
    backgroundColor:
      colorScheme === "light" ? theme.colors.gray[6] : theme.colors.gray[5],
    height: 0.5,
  },
}));
