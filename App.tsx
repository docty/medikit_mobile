import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer, NavigatorScreenParams, RouteProp, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import User from "./components/User";
import Enlarge from "./components/Enlarge";
import { StackParamListBase } from "./types";

const Stack = createNativeStackNavigator<StackParamListBase>();

 
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="User" options={{ headerShadowVisible: false }} component={User} />
          <Stack.Screen name="Enlarge" options={{headerShadowVisible: false}} component={Enlarge} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}




