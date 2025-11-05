import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "../text";
import { makeStyles } from "../theme";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

// TODO:Check mantine button for variants and custom props

export function Button({ title, ...rest }: ButtonProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  container: {
    padding: theme.spacing.md,
    borderRadius: theme.radius[theme.defaultRadius],
    backgroundColor:
      theme.colors[theme.primaryColor][theme.primaryShades[colorScheme]],
  },
}));
