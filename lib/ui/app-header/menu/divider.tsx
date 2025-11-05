import { View } from "react-native";
import { makeStyles } from "../../theme";

export default function HeaderMenuDivider() {
  const styles = useStyles();

  return <View style={styles.divider} />;
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  divider: {
    backgroundColor: theme.foregroundColor[colorScheme],
    height: 0.5,
  },
}));
