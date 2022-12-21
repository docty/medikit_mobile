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

           <StatusBar  barStyle={'dark-content'} backgroundColor={'#fff'}/>
            <Tab.Navigator screenOptions={{
		tabBarStyle:{backgroundColor: 'rgb(10, 40, 50)'}
}}>
                <Tab.Screen
                    name={'Home'}
                    component={Home}
 			options={{
                        tabBarActiveBackgroundColor: 'rgb(210, 100, 10)',
			tabBarLabelStyle: {color:'#fff'},
 			tabBarAllowFontScaling: true,
 			title: 'Home',
                        tabBarIcon: () => <Icon as={Ionicons} name="home-outline" size={'lg'} color={'white'}/>,
                        header: () => null,

                    }}
                />
                <Tab.Screen
                    name={'DoctorList'}
                    component={DoctorList}
                    options={{
tabBarActiveBackgroundColor: 'rgb(210, 100, 10)',
			tabBarLabelStyle: {color:'#fff'},
 			tabBarAllowFontScaling: true,
                        tabBarIcon: () => <Icon as={Ionicons} name="medical-outline" size={'lg'} color={'white'} />,
                        title: 'Doctors',
                        tabBarLabel: 'Doctors',
                        header: () => null
                    }}
                />
                <Tab.Screen
                    name={'Appointment'}
                    component={Appointment}
                    options={{
tabBarActiveBackgroundColor: 'rgb(210, 100, 10)',
			tabBarLabelStyle: {color:'#fff'},
 			tabBarAllowFontScaling: true,
                        tabBarIcon: () => <Icon as={Ionicons} name="book-outline" size={'lg'} color={'white'} />,
                        title: 'Appointment',
                        tabBarLabel: 'Appointment',
                        header: () => null
                    }}
                />

                <Tab.Screen
                    name={'Settings'}
                    component={Settings}
                    options={{
tabBarActiveBackgroundColor: 'rgb(210, 100, 10)',
			tabBarLabelStyle: {color:'#fff'},
 			tabBarAllowFontScaling: true,
                        tabBarIcon: () => <Icon as={Ionicons} name="cog-outline" size={'lg'} color={'white'}/>,
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