import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamListBase } from "./types";
import { QueryClient, QueryClientProvider } from 'react-query';
import { StatusBar } from "react-native";
import { Account } from "./components/Account";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Dashboard from "./components/Dashboard";
import { Profile } from "./components/Profile";
import { Doctor } from "./components/Doctor";
import { Message } from "./components/Message"; 

const Stack = createNativeStackNavigator<StackParamListBase>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <>

      <StatusBar barStyle={'light-content'} backgroundColor={'rgb(190, 24, 93)'}  />

      <NativeBaseProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <Stack.Navigator>
              <Stack.Screen
                name="Account"
                options={{ headerShown: false }}
                component={Account}
              />
              <Stack.Screen
                name="Register"
                options={{
                  title: 'Create Account',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                  headerStyle: { backgroundColor: 'rgb(190, 24, 93)' },
                  headerTintColor: 'white'
                }}
                component={Register}
              />
              <Stack.Screen
                name="Login"
                options={{
                  title: 'Login',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                  headerStyle: { backgroundColor: 'rgb(190, 24, 93)' },
                  headerTintColor: 'white'
                }}
                component={Login}
              />
              <Stack.Screen
                name="Dashboard"
                options={{ headerShown: false }}
                component={Dashboard}
              />
              <Stack.Screen
                name="Profile"
                options={{ headerShadowVisible: false }}
                component={Profile}
              />
              <Stack.Screen
                name="Doctor"
                options={{ headerShadowVisible: false }}
                component={Doctor}
              />
              <Stack.Screen
                name="Message"
                options={{ headerShadowVisible: false }}
                component={Message}
              />
            </Stack.Navigator>
          </QueryClientProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}




