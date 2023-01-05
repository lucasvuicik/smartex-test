import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { List, useTheme } from "react-native-paper";

import { UserContext } from "../../contexts/UserContext";
import { styles as s } from "./styles";

import LucasImg from "../../assets/lucas.jpg";
import PauloImg from "../../assets/paulo.jpg";
import ShrujalImg from "../../assets/shrujal.jpg";
import JaredImg from "../../assets/jared.jpg";

export const CustomDrawer = (props) => {
  const { colors } = useTheme();
  const pkg = require("../../../package.json");
  const { usersData, setUsersData, currentUserData, setCurrentUserData } =
    useContext(UserContext);

  const users = [
    {
      id: "01",
      name: "Lucas Vuicik",
      picture: LucasImg,
    },
    {
      id: "02",
      name: "Paulo Ribeiro",
      picture: PauloImg,
    },
    {
      id: "03",
      name: "Shrujal Shah",
      picture: ShrujalImg,
    },
    {
      id: "04",
      name: "Jared Baribeau",
      picture: JaredImg,
    },
  ];

  useEffect(() => {
    setUsersData(users);
    setCurrentUserData(users[0]);
  }, []);

  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={s.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={s.contentContainerStyle}
      >
        <View style={s.userElements}>
          <Image source={currentUserData?.picture} style={s.userImage} />

          <List.Accordion
            title={currentUserData?.name}
            expanded={expanded}
            onPress={handlePress}
            right={(props) => (
              <List.Icon {...props} icon="arrow-down" color={colors.blue} />
            )}
            style={s.accordionElements}
            titleStyle={s.accordionTitleStyle}
          >
            {usersData.map((user) => {
              if (user.id !== currentUserData?.id) {
                return (
                  <List.Item
                    key={user.id}
                    title={user.name}
                    onPress={() => {
                      setCurrentUserData(user);
                      handlePress();
                    }}
                    style={s.accordionItem}
                  />
                );
              }
            })}
          </List.Accordion>
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
