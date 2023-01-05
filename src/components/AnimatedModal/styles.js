import { StyleSheet } from "react-native";
import { colors } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,

    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: "60%",
    padding: 16,
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  modalLabel: {
    paddingBottom: 16,

    textAlign: "center",
    fontWeight: "400",
    fontSize: 14,
    color: colors.grey600,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    width: "48%",
    padding: 10,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.blue,
  },
  modalButtonsText: {
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 14,
  },
});
