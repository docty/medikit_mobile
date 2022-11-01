import { Box, Center, useColorModeValue, Image, Avatar, Text, Flex, HStack, Icon } from "native-base";
import React from "react";
import { Dimensions, Animated, StatusBar, Pressable } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { Ionicons } from '@expo/vector-icons'



const initialLayout = {
    width: Dimensions.get("window").width
};

const renderScene = SceneMap({
    home: Home,
    search: Search,
    profile: Profile,
});

export const Main = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([{
        key: "home",
        title: "Home"
    }, {
        key: "search",
        title: "Search"
    }, {
        key: "profile",
        title: "Profile"
    }]);

    interface IR {
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
    const renderTabBar = (props: IR) => {

        const inputRange = props.navigationState.routes.map((x, i) => i);
        const icon = ['home', 'search', 'man'];
        return (
            <Box flexDirection="row">
                {props.navigationState.routes.map((route, i) => {
                    // const opacity = props.position.interpolate({
                    //     inputRange,
                    //     outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
                    // });
                    const color = index === i ? useColorModeValue("#000", "#e5e5e5") : useColorModeValue("#1f2937", "#a1a1aa");
                    const borderColor = index === i ? "cyan.500" : useColorModeValue("coolGray.200", "gray.400");

                    return (
                        <Box
                            key={i}
                            borderBottomWidth="3"
                            borderColor={borderColor}
                            flex={1}
                            alignItems="center"
                            p="3"
                        >
                            <Pressable onPress={() => setIndex(i)}>
                                <Icon as={Ionicons} name={icon[i]} size={'lg'} />
                                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
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

