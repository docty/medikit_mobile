import React from "react";
import { NativeBaseProvider, Box } from "native-base"; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "./components/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Main" options={{ headerShown: false }} component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}