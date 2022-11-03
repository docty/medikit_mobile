import { Flex, HStack, Avatar, Text, Image, Container, Box, Icon, Center, VStack, ScrollView, AspectRatio, ZStack, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { Children, useState, useEffect } from "react";
import { Dimensions, PixelRatio } from 'react-native'
import { gallery as data } from '../utils/galleryData'
const { height } = Dimensions.get('window')

const currentHeight = height - 60;

export const Gallery = () => {





    return (
        <ScrollView>
            {
                Children.toArray(data.map(item => (
                    <Thumbnail {...item} />
                )))
            }
        </ScrollView >
    )
}



const Thumbnail = (item: IGallery) => {

    const [state, setState] = useState<string>(item.src[0].uri);

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
        <Box bg={'black'} height={currentHeight} borderBottomWidth={'1'} borderBottomColor={'gray.800'}>
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
                    <Pressable onPress={btnTitleClick}  >
                        <HStack space="1" alignItems="center">
                            <Avatar
                                source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }}
                                size={'sm'}
                            />
                            <Text fontSize="md" color={'white'} fontWeight={'bold'}>@{item.name}</Text>
                        </HStack>
                    </Pressable>
                    <Pressable onPress={btnDownloadClick}>
                        <Icon as={AntDesign} name="download" size={'md'} color={'white'} fontWeight={'bold'} />
                    </Pressable>
                </Box>
                <HStack  px={'4'} mt={currentHeight - 70} w={'full'} space="3" alignItems={'center'} justifyContent={'space-between'}>
                    <Pressable onPress={btnCommentClick} >
                        <Center>
                            <Avatar bgColor={'white'} size={'sm'}>
                                <Icon as={AntDesign} name="like1" size={'md'} />
                            </Avatar>
                            <Text fontSize="xs" color={'white'} fontWeight={'bold'}>{item.likes}</Text>
                        </Center>
                    </Pressable>
                    <HStack space="1" alignItems="center">
                        {
                            Children.toArray(item.src.map(child => (
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
                                <Icon as={AntDesign} name="heart" size={'lg'} />
                            </Avatar>
                            <Text fontSize="xs" color={'white'} fontWeight={'bold'}>{item.comments}</Text>
                        </Center>
                    </Pressable>
                </HStack>
            </ZStack>
        </Box >
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