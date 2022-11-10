import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useRoute } from "@react-navigation/native"
import { Actionsheet, Box, Button, Image, Icon, Text, Menu, Modal, Popover, Slide, Slider, StatusBar, Pressable, } from "native-base"
import React, { useEffect, useState } from "react"
import { EnlargeRouterProp } from "../types"
import { Main } from "./Main"
import { Profile } from "./Profile"
import { Search } from "./Search"
import { gallery } from '../utils/galleryData'
import { downloadFile } from "../utils/download"



const Enlarge = () => {

    const { params } = useRoute<EnlargeRouterProp>();

    const btnDownloadClick = () => {
        downloadFile(params.uri)
    }

    return (
        <Box p="2" bg={'white'}>
            <Button
                colorScheme="primary"
                onPress={btnDownloadClick}
                leftIcon={<Icon as={AntDesign} name="download" size={'md'} color={'white'} fontWeight={'bold'} />}
            >
                Download
            </Button>

            <Image
                source={{  uri: params.uri  }}
                alt="Alternate Text"
                size="full"
                resizeMode="contain"
            />

        </Box>

    )
}

export default Enlarge