import { Box, Center, useColorModeValue, Image, Avatar, Text, Flex, HStack, Icon, Button } from "native-base";
import React from "react";
import { Dimensions, Animated, StatusBar, Pressable } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { Gallery } from "./Gallery";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { AntDesign } from '@expo/vector-icons'



const initialLayout = {
    width: Dimensions.get("window").width
};

const renderScene = SceneMap({
    gallery: Gallery,
    search: Search,
    profile: Profile,
});

export const Main = () => {

    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([{
        key: "search",
        title: "Search"
    },
    {
        key: "gallery",
        title: "Gallery"
    },
    {
        key: "profile",
        title: "Profile"
    }]);

 
    const renderTabBar = (props: IRenderTabBar) => {


        const icon = ['search1', 'picture', 'user'];
        return (
            <Box flexDirection="row">
                {props.navigationState.routes.map((route, i) => {

                    const color = index === i ? useColorModeValue("#000", "#e5e5e5") : useColorModeValue("#1f2937", "#a1a1aa");
                    const borderColor = index === i ? "cyan.500" : useColorModeValue("coolGray.200", "gray.400");

                    return (
                        <Box
                            key={i}
                            borderBottomWidth="3"
                            borderColor={borderColor}
                            flex={1}
                            bg={'white'}
                            p="2"
                        >

                            <Pressable onPress={() => setIndex(i)}>
                                <Center>
                                    <Icon as={AntDesign} name={icon[i]} size={'lg'} />
                                    <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                                </Center>
                            </Pressable>
                        </Box>
                    )
                })}
            </Box>
        )
    };

    return (
        <TabView
            tabBarPosition="bottom"
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ marginTop: StatusBar.currentHeight }}

        />
    );
}

interface IRenderTabBar {
    navigationState: {
        routes: any[]
    }
    position: {
        interpolate: (args: sub) => any
    }
}

type sub = {
    inputRange: any;
    outputRange: any;
}
