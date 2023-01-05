import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Avatar, useTheme } from "react-native-paper";

import { StackRoutes } from "./stackRoutes";
import { CustomDrawer } from "../components";

const Drawer = createDrawerNavigator();

export const Routes = () => {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#F1F1F1" },
        drawerLabelStyle: { marginLeft: -20, fontSize: 16 },
        drawerActiveBackgroundColor: colors.blue,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.blue600,
      }}
    >
      <Drawer.Screen
        name="Tarefas"
        component={StackRoutes}
        options={{
          drawerIcon: () => (
            <Avatar.Icon
              size={24}
              icon="check"
              color={colors.white}
              style={{ backgroundColor: colors.blue600 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Configuracoes"
        component={StackRoutes}
        options={{
          drawerIcon: () => (
            <Avatar.Icon
              size={24}
              icon="folder"
              color={colors.white}
              style={{ backgroundColor: colors.blue600 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={StackRoutes}
        options={{
          drawerIcon: () => (
            <Avatar.Icon
              size={24}
              icon="folder"
              color={colors.white}
              style={{ backgroundColor: colors.blue600 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
