// ./App.js
import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./styles/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <StackNavigator />
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
