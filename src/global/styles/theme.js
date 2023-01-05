import { DefaultTheme } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

export const colors = {
  black: "#000",
  blue: "#039be6",

  grey800: "#373333",
  grey700: "#504D4D",
  grey600: "#696666",
  grey300: "#B4B3B3",
  grey200: "#CDCCCC",
  grey100: "#FBFBFB",

  white: "#fff",
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    black: "#000",

    grey800: "#373333",
    grey700: "#504D4D",
    grey600: "#696666",
    grey300: "#B4B3B3",
    grey200: "#CDCCCC",
    grey100: "#FBFBFB",

    white: "#fff",
    pink: "hotpink",

    blue: "#039be6",
    blue600: "#154c79",
    orange: "#ff7143",
    red: "#E83F5B",
  },

  fontSize: {
    verySmall: RFValue(10),
    small: RFValue(12),
    medium: RFValue(14),
    extraMedium: RFValue(18),
    big: RFValue(20),
    extraBig: RFValue(32),
  },

  bold: {
    small: "200",
    extraSmall: "400",
    medium: "600",
    bolder: "900",
  },
};
