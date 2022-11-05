import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Actionsheet, Box, Button, Text, Fab, FlatList, Icon, Menu, Modal, Popover, Slide, Slider, StatusBar, } from "native-base"
import React from "react"
import { Main } from "./Main"
import { Profile } from "./Profile"
import { Search } from "./Search"




export const Tester = () => {

    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const Render = (value: any) => <Text fontSize="xs" p={'12'} bg={'pink.500'} my={'4'}>Text</Text>

    return (
        <FlatList
            data={data}
            renderItem={Render}
            ItemSeparatorComponent={() => <Box  bg="primary.400" p="2" rounded="lg">
                Box
            </Box>
            }
            refreshing
            onRefresh={() => true}

        />


    )
}