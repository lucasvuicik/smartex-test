import React from "react";
import { View, Text, Image } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { styles as s } from "./styles";

export const CustomDrawer = (props) => {
  const pkg = require("../../../package.json");

  return (
    <View style={s.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={s.contentContainerStyle}
      >
        <View style={s.userElements}>
          <Image
            source={require("../../assets/user-profile-picture.jpg")}
            style={s.userImage}
          />
          <Text style={s.userName}>Lucas Vuicik</Text>
        </View>

        <View style={s.menuElements}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={s.extraInfoElements}>
        <Text style={s.extraInfoText}>System version: {pkg.version}</Text>
      </View>
    </View>
  );
};
