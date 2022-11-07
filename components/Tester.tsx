import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator, useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { Actionsheet, Box, Button, Text, Fab, Image, FlatList, Icon, Menu, Modal, Popover, Slide, Slider, StatusBar, Divider, Spinner, Pressable, Avatar, Center, HStack, ZStack, } from "native-base"
import React, { Children, useEffect, useState } from "react"
import { Main } from "./Main"
import { Profile } from "./Profile"
import { Search } from "./Search"
import { QueryFunctionContext, useInfiniteQuery, useQuery } from 'react-query';
import { getLength, getRandomKey, getRandomNumber, getSingleData } from "../utils/firebase-adapter"
import { isEmpty, keys } from "ramda" 
import { HomeScreenNavigationProp, IGallery, ISrc } from "../types"
import { useNavigation } from "@react-navigation/native"
import { useWindowDimensions } from "react-native"



export const Tester = () => {



    const fetchAllGames = ({ pageParam = getRandomKey(getLength()) }: QueryFunctionContext) => {

        const dad = getSingleData(pageParam)

        return Promise.resolve(dad)
    }


    const { data, fetchNextPage, isSuccess } = useInfiniteQuery({
        queryKey: ['personal'],
        queryFn: fetchAllGames,
    })

    useEffect(() => {
        console.log(data?.pages, isSuccess);
    }, [data])



    const onCli = () => {
        const length = getLength();
        const pageParam = getRandomKey(length)

        fetchNextPage({ pageParam });

    }

    if (isSuccess) {
        return (
            <Box flex={1} safeAreaTop backgroundColor='white'>
                <Box height={16} justifyContent={'center'} px={2}>
                    <Text fontSize={28} fontWeight={'600'} color={'emerald.500'}>
                        Explore Games
                    </Text>
                   
                    {
                        Children.toArray(data?.pages.map((item, index) => {
                            const key = keys(item)[0];
                            const { username, uid, src } = item[key];
                            const values = Object.values(src)[0] as ISrc; 
                            return (
                                <Thumbnail username={username} uid={uid} src={values}  />
                                
                                    

                            )


                        }))
                    }
                </Box>
                <Pressable
                        p="2"
                        borderWidth="1"
                        onPress={onCli}
                        position={'fixed'}
                    >
                        <Text>Hello World!</Text>
                    </Pressable>

            </Box>
        );
    } else {
        <Text fontSize="xs">Now Loading</Text>

    }
}


const Thumbnail = ({ username, uid, src }: IGallery) => {

    // const { height } = useWindowDimensions();
     const { comments, likes, upload } = src;

     const up = Object.values(upload);

    const [state, setState] = useState<string>(up[0].uri);
    const [like, setLike] = useState<boolean>(false);

    const navigation = useNavigation<HomeScreenNavigationProp>();

    // const currentHeight = height - useBottomTabBarHeight()

    const btnTitleClick = (username: string, uid: string) => {
        console.log('btnTitleClick');
        navigation.navigate('User', { username, uid })
    }

    const btnDownloadClick = () => {
        console.log('btnDownloadClick');

    }

    const btnCommentClick = () => {
        console.log('btnCommentClick');

    }

    const btnLikeClick = () => {
        setLike(p => !p);
        console.log('btnLikeClick');

    }


    return (
        <Box  bg={'black'} height={'full'} borderBottomWidth={'1'} borderBottomColor={'gray.800'}>
        
                <Center height={800 - 80} w={'full'} >
                    <Image
                        source={{ uri: state }}
                        alt="Alternate Text"
                        size={'full'}
                        resizeMode={'contain'}
                    />
                </Center>
                <Box px={'4'} width={'full'} display={'flex'} flexDirection="row" justifyContent={'space-between'} alignItems={'center'} p={'2'}>
                    <Pressable onPress={() => btnTitleClick(username, uid)}  >
                        <HStack space="1" alignItems="center">
                            <Avatar
                                source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }}
                                size={'sm'}
                            />
                            <Text fontSize="md" color={'white'} fontWeight={'bold'}>@{username}</Text>
                        </HStack>
                    </Pressable>
                    <Pressable onPress={btnDownloadClick}>
                        <Icon as={AntDesign} name="download" size={'md'} color={'white'} fontWeight={'bold'} />
                    </Pressable>
                </Box>
                <HStack px={'4'} mt={200 - 70} w={'full'} space="3" alignItems={'center'} justifyContent={'space-between'}>
                    <Pressable onPress={btnCommentClick} >
                        <Center>
                            <Avatar bgColor={'white'} size={'sm'}>
                                <Icon as={AntDesign} name="like1" size={'md'} />
                            </Avatar>
                            <Text fontSize="xs" color={'white'} fontWeight={'bold'}>{Object.values(likes).length}</Text>
                        </Center>
                    </Pressable>
                    <HStack space="1" alignItems="center">
                        {
                            Children.toArray(up.map(child => (
                                <Pressable onPress={() => { setState(child.uri) }}  >
                                    <Center
                                        borderWidth={'2'}
                                        borderColor={`${state === child.uri ? 'blue.400' : 'white'}`}
                                        size={'16'}
                                    >
                                        <Image
                                            source={{ uri: child.uri }}
                                            alt="Alternate Image"
                                            style={{ resizeMode: 'contain' }}
                                            size={'full'}
                                        />
                                    </Center>
                                </Pressable>


                            )))
                        }
                    </HStack>
                    <Pressable onPress={btnLikeClick} >
                        <Center>
                            <Avatar bgColor={'white'} size={'sm'}>
                                <Icon as={AntDesign} name="heart" size={'lg'} color={`${like && 'red.500'}`} />
                            </Avatar>
                            <Text fontSize="xs" color={'white'} fontWeight={'bold'}>{Object.values(comments).length}</Text>
                        </Center>
                    </Pressable>
                </HStack> 
            
        </Box >
    )
}