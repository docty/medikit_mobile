import { Flex, HStack, Avatar, Text, Image, Container, Box, Icon, Center, VStack, ScrollView, AspectRatio, ZStack, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { Children, useState, useEffect } from "react";
import { Dimensions, PixelRatio } from 'react-native'
import { gallery as data } from '../utils/galleryData'
const { height, width } = Dimensions.get('window')


export const Gallery = () => {



    const btnTitleClick = () => {
        console.log('btnTitleClick');

    }

    const btnDownloadClick = () => {
        console.log('btnDownloadClick');

    }

    const btnCommentClick = () => {
        console.log('btnCommentClick');

    }

    const btnLikeClick = () => {
        console.log('btnLikeClick');

    }

    return (
        <ScrollView>
            {
                Children.toArray(data.map(item => (
                    <Box bg={'black'} height={height - 60} borderBottomWidth={'1'} borderBottomColor={'gray.800'}>
                        <ZStack >
                            <Rs name={""} likes={""} comments={""} src={item.src} />
                            <Box px={'4'} width={'full'} display={'flex'} flexDirection="row" justifyContent={'space-between'} alignItems={'center'} p={'2'}>
                                <Pressable onPress={btnTitleClick}  >
                                    <HStack space="1" alignItems="center">
                                        <Avatar
                                            source={{
                                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                                            }}
                                            size={'sm'}
                                        />
                                        <Text fontSize="sm" color={'white'} fontWeight={'bold'}>@{item.name}</Text>
                                    </HStack>
                                </Pressable>
                                <Pressable onPress={btnDownloadClick}>
                                    <Icon as={AntDesign} name="download" size={'md'} color={'white'} />
                                </Pressable>
                            </Box>
                            <HStack px={'4'} mt={height - 130} w={'full'} space="3" alignItems={'center'} justifyContent={'space-between'}>
                                <Pressable onPress={btnCommentClick} >
                                    <Center>
                                        <Avatar bgColor={'white'} size={'sm'}>
                                            <Icon as={AntDesign} name="like1" size={'md'} />
                                        </Avatar>
                                        <Text fontSize="xs" color={'white'} fontWeight={'bold'}>{item.likes}</Text>
                                    </Center>
                                </Pressable>

                                <Pressable onPress={btnLikeClick} >
                                    <Center>
                                        <Avatar bgColor={'white'} size={'sm'}>
                                            <Icon as={AntDesign} name="heart" size={'lg'} />
                                        </Avatar>
                                        <Text fontSize="xs" color={'white'} fontWeight={'bold'}>{item.comments}</Text>
                                    </Center>
                                </Pressable>
                            </HStack>
                        </ZStack>
                    </Box >
                )))
            }
        </ScrollView >
    )
}



const Rs = (item: IGallery) => {

    const [state, setState] = useState(item.src[0].uri);

    useEffect(() => {
        console.log(state);

    }, [state])
    return (
        <Box width={'full'} height={height - 130} >
            <Center bg={'black'} mt="0" ml="0"  >
                <Image
                    source={{ uri: state }}
                    alt="Alternate Text"
                    style={{ resizeMode: 'contain' }}
                    size={'full'}
                />
                <HStack space="1" alignItems="center" >
                    {
                        Children.toArray(item.src.map(child => (
                            <Pressable onPress={() => { setState(child.uri) }}  >
                                <Center
                                    borderWidth={'2'}
                                    borderColor={'white'}
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
            </Center>

        </Box>
    )
}


interface IGallery {
    name: string;
    likes: string
    comments: string
    src: ITy[]
}

interface ITy {
    uri: string
}