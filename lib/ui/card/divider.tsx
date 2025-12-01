import { View } from "react-native";
import { makeStyles } from "../theme";

export default function CardDivider() {
  const styles = useStyles();

  return <View style={styles.divider} />;
}

const useStyles = makeStyles(({ themeb }) => ({
  divider: {
    backgroundColor: themeb.colors.get("gray").shade(6, 5),
    height: 0.5,
  },
}));
