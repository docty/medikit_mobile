import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { Box, Icon } from "native-base";
import React from "react";
import { Gallery } from "./Gallery";
import { Search } from "./Search";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { SessionProvider } from "./Session";
import { Protected } from "./Protected";

const Tab = createBottomTabNavigator()

const Home = () => {


    return (
        <SessionProvider>
            <StatusBar />
            <Tab.Navigator>
                <Tab.Screen
                    name={'Gallery'}
                    component={Gallery}
                    options={{
                        title: 'Home',
                        tabBarIcon: () => <Icon as={Ionicons} name="home-outline" size={'lg'} />,
                        header: () => <Box h={StatusBar.currentHeight} rounded="lg" />,
                    }} />
                <Tab.Screen
                    name={'Search'}
                    component={Search}
                    options={{
                        tabBarIcon: () => <Icon as={Ionicons} name="search1" size={'lg'} />,
                        title: 'Search',
                        tabBarLabel: 'Search',
                    }}
                />


                <Tab.Screen
                    name={'Account'}
                    component={Protected}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <Icon as={Ionicons} name="user" size={'lg'} />
                    }} />

            </Tab.Navigator>
        </SessionProvider>
    );
}

export default Home;