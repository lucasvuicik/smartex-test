import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  contentContainerStyle: {
    backgroundColor: theme.colors.blue600,
  },
  userElements: {
    padding: 20,
    backgroundColor: theme.colors.blue600,
  },
  userImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 40,
  },
  userName: {
    color: theme.colors.white,
    fontWeight: theme.bold.bolder,
  },
  menuElements: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  extraInfoElements: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: theme.colors.grey200,
  },
  extraInfoText: {
    color: theme.colors.grey300,
  },
});
