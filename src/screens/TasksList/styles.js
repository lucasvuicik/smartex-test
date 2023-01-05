import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  // row component
  rowContainer: {
    width: "100%",
    marginBottom: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  rowRightElements: { width: "100%", marginLeft: 20 },
  rowTitle: { fontWeight: "bold" },
  rowDesc: { fontWeight: "bold" },
  rowDate: { fontWeight: "bold" },

  // screen
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey100,
  },
  flatListContainer: {
    flex: 1,
    padding: 20,
  },
});
