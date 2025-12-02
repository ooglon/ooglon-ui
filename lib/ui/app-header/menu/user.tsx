import { Dimensions } from "react-native";

import { Avatar } from "../../avatar";
import { Flex } from "../../flex";
import { Text } from "../../text";
import { makeStyles } from "../../theme";

type HeaderMenuUserProps = {
  name: string;
  avatarUrl: string;
};

export default function HeaderMenuUser({
  name,
  avatarUrl,
}: HeaderMenuUserProps) {
  const styles = useStyles();

  return (
    <Flex
      direction="row"
      align="center"
      justify="flex-end"
      gap="md"
      style={styles.container}
    >
      <Text textAlign="right">{name}</Text>

      <Avatar avatarUrl={avatarUrl} size={28} />
    </Flex>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: Dimensions.get("window").width - theme.spacing("md") * 6,
  },
}));
