import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { styles as s } from "./styles";

export const Header = ({ title }) => {

  const navigation = useNavigation();
  
  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Feather name="menu" size={36} color="#FFF" />
      </TouchableOpacity>

      <Text style={s.headerTitle}>{title}</Text>
    </View>
  );
};
