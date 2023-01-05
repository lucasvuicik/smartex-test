import React from "react";

import { IconButton } from "react-native-paper";

export const CircleButton = ({ icon, onPress }) => {
  return (
    <IconButton
      icon={icon}
      iconColor="#FFF"
      containerColor="#ff7143"
      mode="contained"
      size={50}
      onPress={onPress}
      style={{
        position: "absolute",
        right: 15,
        bottom: 15,
      }}
    />
  );
};
