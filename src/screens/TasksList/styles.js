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
  rowTitle: {
    fontWeight: theme.bold.medium,
    fontSize: theme.fontSize.extraMedium,
    color: theme.colors.grey800,
  },
  rowDesc: {
    marginVertical: 3,
    fontSize: theme.fontSize.medium,
    color: theme.colors.grey600,
  },
  rowDate: {
    fontSize: theme.fontSize.small,
    color: theme.colors.grey600,
  },

  // screen
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey100,
  },
  flatListContainer: {
    flex: 1,
    padding: 20,
  },
  emptyScreenContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyScreenIcon: {
    marginVertical: 30,
    backgroundColor: theme.colors.red,
  },
  emptyScreenText: {
    textAlign: "center",
    fontWeight: theme.bold.bolder,
    fontSize: 20,
    color: theme.colors.red,
  },
});
