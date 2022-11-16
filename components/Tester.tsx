import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator, useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { Actionsheet, Box, Button, Text, Fab, Image, FlatList, Icon, Menu, Modal, Popover, Slide, Slider, StatusBar, Divider, Spinner, Pressable, Avatar, Center, HStack, ZStack, } from "native-base"
import React, { Children, useEffect, useState } from "react"
import { Main } from "./Main"
import { Profile } from "./Profile"
import { Search } from "./Search"
import { QueryFunctionContext, useInfiniteQuery, useQuery } from 'react-query';
import { getLength, getRandomKey, getRandomNumber } from "../utils/firebase-adapter"
import { isEmpty, keys } from "ramda"
import { HomeScreenNavigationProp, IGallery, ISrc } from "../types"
import { useNavigation } from "@react-navigation/native"
import { useWindowDimensions } from "react-native"



export const Tester = () => {

    return (
        <Box flex={1} safeAreaTop backgroundColor='white'>


        </Box >
    )
}
