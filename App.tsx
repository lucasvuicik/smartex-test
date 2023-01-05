import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { theme } from "./src/global/styles/theme";


export const App = () => {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            <PaperProvider theme={theme}>
                <Routes />
            </PaperProvider>
        </NavigationContainer>
    );
};

export default App;
