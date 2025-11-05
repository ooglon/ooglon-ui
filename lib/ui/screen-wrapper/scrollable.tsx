import { PropsWithChildren, useCallback, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";

import { makeStyles } from "../theme";

type ScrollableProps = {
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  onRefresh?: () => Promise<void>;
} & PropsWithChildren;

export default function Scrollable({
  children,
  padding = "xl",
  onRefresh,
}: ScrollableProps) {
  const styles = useStyles({ padding });

  const [refreshing, setRefreshing] = useState(false);

  const onRefreshWrapper = useCallback(async () => {
    if (onRefresh) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
  }, [onRefresh]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshWrapper}
            />
          ) : undefined
        }
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
        >
          {children}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const useStyles = makeStyles(
  (
    { theme, colorScheme },
    props: {
      padding: "xs" | "sm" | "md" | "lg" | "xl" | "none";
    }
  ) => ({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor[colorScheme],
      padding:
        props.padding !== "none" ? theme.spacing[props.padding] : undefined,
    },
  })
);
