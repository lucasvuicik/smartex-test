import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StackRoutes } from "./stackRoutes";
import { CustomDrawer } from "../components";

const Drawer = createDrawerNavigator();

export const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#F1F1F1" },
        drawerActiveBackgroundColor: "#F1F1F1",
        drawerActiveTintColor: "orange",
        drawerInactiveTintColor: "black",
      }}
    >
      <Drawer.Screen name="To Do" component={StackRoutes} />
      <Drawer.Screen name="Configuracoes" component={StackRoutes} />
      <Drawer.Screen name="Sair" component={StackRoutes} />
    </Drawer.Navigator>
  );
};
