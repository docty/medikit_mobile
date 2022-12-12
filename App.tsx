import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamListBase } from "./types";
import { QueryClient, QueryClientProvider } from 'react-query';
import { StatusBar } from "expo-status-bar";
import { Account } from "./components/Account";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Dashboard from "./components/Dashboard";

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
              <Stack.Screen
                name="Account"
                options={{ headerShown: false}}
                component={Account}
              />
              <Stack.Screen
                name="Register"
                options={{ header: () => null }}
                component={Register}
              />
              <Stack.Screen
                name="Login"
                options={{  header: () => null  }}
                component={Login}
              />
              <Stack.Screen
                name="Dashboard"
                options={{ headerShown: false }}
                component={Dashboard}
              />
            </Stack.Navigator>
          </QueryClientProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}




