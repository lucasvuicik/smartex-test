import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";

export const App = () => {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            <PaperProvider>
                <Routes />
            </PaperProvider>
        </NavigationContainer>
    );
};

export default App;
