import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { Box, Icon } from "native-base";
import React from "react";
import { Gallery } from "./Gallery";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Account } from "./Account";

const Tab = createBottomTabNavigator()

const Home = () => {
    const sessionState = '';

    return (
        <Tab.Navigator initialRouteName="Gallery" >
            <Tab.Screen
                name={'Search'}
                component={Search}
                options={{
                    tabBarIcon: () => <Icon as={AntDesign} name="search1" size={'lg'} />,
                    title: 'Search',
                    tabBarLabel: 'Search',

                }}
            />
            <Tab.Screen
                name={'Gallery'}
                component={Gallery}
                options={{
                    tabBarIcon: () => <Icon as={AntDesign} name="picture" size={'lg'} />,
                    header: () => <Box h={StatusBar.currentHeight} rounded="lg" />,

                }} />
            {
                sessionState ? (
                    <Tab.Screen
                        name={'Profile'}
                        component={Profile}
                        options={{
                            headerShown: false,
                            tabBarIcon: () => <Icon as={AntDesign} name="user" size={'lg'} />
                        }} />
                ) : (
                    <Tab.Screen
                        name={'Account'}
                        component={Account}
                        options={{
                            headerShown: false,
                            tabBarIcon: () => <Icon as={AntDesign} name="user" size={'lg'} />
                        }} />

                )
            }

        </Tab.Navigator>
    );
}

export default Home;