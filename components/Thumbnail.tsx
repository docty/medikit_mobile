import { AntDesign } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Box, ZStack, Center, HStack, Avatar, Icon, Image, Text } from "native-base";
import React, { Children, memo, useState } from "react";
import { Pressable, useWindowDimensions } from "react-native";
import { IGallery, HomeScreenNavigationProp } from "../types";

const Thumbnail = ({ username, uid, src }: IGallery) => {

    const { height } = useWindowDimensions();
    const { comments, likes, upload } = src;

    const up = Object.values(upload);

    const [state, setState] = useState<string>(up[0].uri);
    const [like, setLike] = useState<boolean>(false);

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const currentHeight = height - useBottomTabBarHeight()

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
        <Box bg={'darkBlue.900'} height={currentHeight} borderBottomWidth={'1'} borderBottomColor={'gray.800'}>
            <ZStack>
                <Center height={currentHeight - 80} w={'full'} >
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
                <HStack px={'4'} mt={currentHeight - 70} w={'full'} space="3" alignItems={'center'} justifyContent={'space-between'}>
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
            </ZStack>
        </Box >
    )
}


export default memo(Thumbnail);