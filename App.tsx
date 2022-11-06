import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import User from "./components/User";
import Enlarge from "./components/Enlarge";
import { StackParamListBase } from "./types";
import { QueryClient, QueryClientProvider } from 'react-query';
import { StatusBar } from "expo-status-bar";
import { Tester } from "./components/Tester";

const Stack = createNativeStackNavigator<StackParamListBase>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NativeBaseProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <Stack.Navigator>
              <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
              <Stack.Screen name="User" options={{ headerShadowVisible: false }} component={User} />
              <Stack.Screen name="Enlarge" options={{ headerShadowVisible: false }} component={Enlarge} />
            </Stack.Navigator>
          </QueryClientProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}




