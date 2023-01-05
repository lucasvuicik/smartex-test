import { DefaultTheme } from "react-native-paper";

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
};
