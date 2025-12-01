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

const useStyles = makeStyles(({ themeb }) => ({
  container: {
    padding: themeb.spacing("md"),
    borderRadius: themeb.radius(),
    backgroundColor: themeb.colors.select("white", themeb.colors.raw.dark[4]),
    // themeb.colorScheme === "light" ? "white" : themeb.colors.raw.dark[4],
  },
}));

Card.Divider = CardDivider;
Card.Header = CardHeader;
