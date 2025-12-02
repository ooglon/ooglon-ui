import { Flex, FlexProps } from "../flex";
import { makeStyles } from "../theme";
import { useShadowStyle } from "../theme/default-styles";
import CardDivider from "./divider";
import CardHeader from "./header";

type CardProps = FlexProps;

export function Card({ gap = "xs", children }: CardProps) {
  const { defaultShadow } = useShadowStyle();
  const styles = useStyles();

  return (
    <Flex gap={gap} style={[styles.container, defaultShadow]}>
      {children}
    </Flex>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing("md"),
    borderRadius: theme.radius("default"),
    backgroundColor: theme.colors.select("white", theme.colors.get("dark", 4)),
  },
}));

Card.Divider = CardDivider;
Card.Header = CardHeader;
