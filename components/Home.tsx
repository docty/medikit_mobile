import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { Box, Icon } from "native-base";
import React from "react";
import { Gallery } from "./Gallery";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator()

const Home = () => {
    return (
        <Tab.Navigator initialRouteName="Gallery" >
            <Tab.Screen
                name={'Search'}
                component={Search}
                options={{
                    tabBarIcon: () => <Icon as={AntDesign} name="search1" size={'lg'} />,
                    title: 'Docty',
                    tabBarLabel: 'Search',

                }}
            />
            <Tab.Screen
                name={'Gallery'}
                component={Gallery}
                options={{
                    tabBarIcon: () => <Icon as={AntDesign} name="picture" size={'lg'} />,
                    header: (props) =>  <Box h={StatusBar.currentHeight} rounded="lg"/>,

                }} />
            <Tab.Screen
                name={'Profile'}
                component={Profile}
                options={{
                    tabBarIcon: () => <Icon as={AntDesign} name="user" size={'lg'} />
                }} />
        </Tab.Navigator>
    );
}

export default Home;