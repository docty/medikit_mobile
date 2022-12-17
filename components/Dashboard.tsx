import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { Box, Icon } from "native-base";
import React from "react";
import { Home } from "./Home";
import { Appointment } from "./Appointment";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Settings } from "./Settings";
import { DoctorList } from "./DoctorList";
const Tab = createBottomTabNavigator()

const Dashboard = () => {


    return (
        <>
            <StatusBar style="light" />
            <Tab.Navigator>
                <Tab.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        title: 'Home',
                        tabBarIcon: () => <Icon as={Ionicons} name="home-outline" size={'lg'} />,
                        header: () => <Box h={StatusBar.currentHeight} rounded="lg" />,
                    }}
                />
                <Tab.Screen
                    name={'DoctorList'}
                    component={DoctorList}
                    options={{
                        tabBarIcon: () => <Icon as={Ionicons} name="medical-outline" size={'lg'} />,
                        title: 'Doctors',
                        tabBarLabel: 'Doctors',
                        header: () => null
                    }}
                />
                <Tab.Screen
                    name={'Appointment'}
                    component={Appointment}
                    options={{
                        tabBarIcon: () => <Icon as={Ionicons} name="book-outline" size={'lg'} />,
                        title: 'Appointment',
                        tabBarLabel: 'Appointment',
                        header: () => null
                    }}
                />

                <Tab.Screen
                    name={'Settings'}
                    component={Settings}
                    options={{
                        tabBarIcon: () => <Icon as={Ionicons} name="cog-outline" size={'lg'} />,
                        title: 'Settings',
                        tabBarLabel: 'Settings',
                        header: () => null
                    }}
                />




            </Tab.Navigator>
        </>
    );
}

export default Dashboard;