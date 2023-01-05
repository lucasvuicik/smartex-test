import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';

import { UserProvider } from "./src/contexts/UserContext";

import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { theme } from "./src/global/styles/theme";


export const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <StatusBar hidden={true} />
                <PaperProvider theme={theme}>
                    <Routes />
                </PaperProvider>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
