import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddTask, EditTask, TasksList } from "../screens";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="TasksList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="TasksList" component={TasksList} />
    </Stack.Navigator>
  );
};
