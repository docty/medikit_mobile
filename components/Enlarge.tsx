import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useRoute } from "@react-navigation/native"
import { Actionsheet, Box, Button, Image, Icon, Menu, Modal, Popover, Slide, Slider, StatusBar, } from "native-base"
import React, { useEffect, useState } from "react"
import { EnlargeRouterProp } from "../types"
import { Main } from "./Main"
import { Profile } from "./Profile"
import { Search } from "./Search"
import { gallery } from '../utils/galleryData'



const Enlarge = () => {

    const { params } = useRoute<EnlargeRouterProp>();


    return (
        <Box p="2" bg={'white'}>
            <Image
                source={{
                    uri: params.uri
                }}
                alt="Alternate Text"
                size="full"
                resizeMode="contain"
            />

        </Box>

    )
}

export default Enlarge