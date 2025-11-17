import { Text } from "../text";
import { makeStyles } from "../theme";

type FieldErrorsProps = {
  errors?: string[];
};

export default function FieldErrors({ errors }: FieldErrorsProps) {
  const styles = useStyles();

  return errors?.map((error, index) => (
    <Text key={index} style={styles.error}>
      {error}
    </Text>
  ));
}

const useStyles = makeStyles(({ theme, colorScheme }) => ({
  error: {
    color: theme.colors.red[theme.primaryShades[colorScheme].foreground],
    fontSize: theme.fontSize - 2,
  },
}));
