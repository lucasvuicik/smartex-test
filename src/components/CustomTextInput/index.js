import React from "react";
import { TextInput, useTheme } from "react-native-paper";
import { styles as s } from "./styles";

export const CustomTextInput = ({
  value,
  label,
  placeholder,
  onChangeText,
  style,
  maxLength,
  multiline,
}) => {
  const { colors } = useTheme();

  return (
    <TextInput
      mode="flat"
      value={value}
      label={label}
      placeholder={placeholder}
      onChangeText={onChangeText}
      maxLength={maxLength}
      underlineColor={colors.blue}
      activeUnderlineColor={colors.blue}
      textColor={colors.grey600}
      multiline={multiline}
      style={{ ...s.textInput, ...style }}
    />
  );
};
