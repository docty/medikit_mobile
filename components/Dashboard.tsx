import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { Box, Icon } from "native-base";
import React from "react";
import { Home } from "./Home";
import { Appointment } from "./Appointment";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native"; 
const Tab = createBottomTabNavigator()

const Dashboard = () => {

 
    return (
        <>
            <StatusBar />
            <Tab.Navigator>
                <Tab.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        title: 'Home',
                        tabBarIcon: () => <Icon as={Ionicons} name="home-outline" size={'lg'} />,
                        header: () => <Box h={StatusBar.currentHeight} rounded="lg" />,
                    }} />
                <Tab.Screen
                    name={'Appointment'}
                    component={Appointment}
                    options={{
                        tabBarIcon: () => <Icon as={Ionicons} name="search-outline" size={'lg'} />,
                        title: 'Appointment',
                        tabBarLabel: 'Appointment',
                        header: () => null
                    }}
                />


               

            </Tab.Navigator>
        </>
    );
}

export default Dashboard;