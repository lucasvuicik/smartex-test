import React from "react";
import { View, Text, Image } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#f1f1f1" }}
      >
        <View style={{ backgroundColor: "purple" }}>
          <Image
            source={require("../../assets/user-profile-picture.jpg")}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View>
        <Text>LUCAS</Text>
      </View>
    </View>
  );
};
