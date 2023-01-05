import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey100,
  },
  flatListContainer: {
    flex: 1,
    padding: 20,
  },
  elementsContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.blue,
  },
  textinput: {
    marginBottom: 20,
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.grey300,
    color: theme.colors.grey600,
  },
});
