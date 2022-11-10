import { AntDesign } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Box, Pressable, ZStack, Center, HStack, Avatar, Icon, Image, Text, Actionsheet, Input, ScrollView, Button, Toast } from "native-base";
import { isEmpty, type, values } from "ramda";
import React, { Children, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { IGallery, HomeScreenNavigationProp, IUpload } from "../types";
import { downloadFile } from "../utils/download";
import { useSession } from "./Session";
import { ToastAndroid } from 'react-native'
import { useMutation } from "react-query";
import { setLikeAction } from "../utils/firebase-adapter";

const toast = ToastAndroid

const Thumbnail = ({ username, uid, src, displayImage }: IGallery) => {


    const { comments, likes, upload } = src;
    const { session } = useSession();
    const images = values(upload);

    const { height } = useWindowDimensions();
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [state, setState] = useState<string>('');
    const [like, setLike] = useState<boolean>(false);
    const [commentSheet, setCommentSheet] = useState<boolean>(false);
    const bottomTabBarHeight = useBottomTabBarHeight()


    const currentHeight = height - bottomTabBarHeight;

    const allcomments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const btnTitleClick = (username: string, uid: string) => {
        navigation.navigate('User', { username, uid })
    }

    const btnDownloadClick = () => {
        downloadFile(isEmpty(state) ? images[0].uri : state)
    }

    const btnCommentClick = () => {
        setCommentSheet(true)
    }

    const likeDesign = (id: string) => {
        return setLikeAction(id)
    }


    const { mutate, data: likeData } = useMutation({
        mutationKey: ['search'],
        mutationFn: likeDesign
    })


    const btnLikeClick = () => {
        if (type(session) === 'Null') {
            return toast.show('Login to like a design', 300)
        }

        mutate(session)
        setLike(p => !p);

    }




    useEffect(() => {
        setState('')

    }, [src])

    // TODO: Flashlist refresh does not update the displayed list from top
    return (
        <Box bg={'darkBlue.900'} height={currentHeight} borderBottomWidth={'1'} borderBottomColor={'gray.800'}>
            <ZStack>
                <Center height={currentHeight - 80} w={'full'} >
                    <Image
                        source={{ uri: isEmpty(state) ? images[0].uri : state }}
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
                                    uri: displayImage
                                }}
                                size={'sm'}
                            />
                            <Text fontSize="md" color={'white'} fontWeight={'bold'}>@{username}</Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={btnDownloadClick} _pressed={{ backgroundColor: 'gray.700' }}>
                        <Icon as={AntDesign} name="download" size={'lg'} color={'white'} fontWeight={'bold'} />
                    </Pressable>
                </Box>
                <HStack px={'4'} mt={currentHeight - 70} w={'full'} space="3" alignItems={'center'} justifyContent={'space-between'}>
                    {/* TODO: Action sheet  */}
                    <Actionsheet
                        isOpen={commentSheet}
                        onClose={() => { setCommentSheet(false) }}

                    >
                        <Actionsheet.Content>
                            <Actionsheet.Item >Comments</Actionsheet.Item>
                            <Actionsheet.Item >
                                <ScrollView>
                                    {
                                        Children.toArray(allcomments.map(item => (
                                            <Text fontSize="4xl">Text</Text>
                                        )))
                                    }

                                </ScrollView>

                            </Actionsheet.Item>
                            <Actionsheet.Item >
                                <Input width={'full'} placeholder="Default Input" />

                            </Actionsheet.Item>
                        </Actionsheet.Content>
                    </Actionsheet>

                    <Pressable onPress={btnCommentClick} _pressed={{ backgroundColor: 'gray.700' }}>
                        <Center>
                            <Avatar bgColor={'white'} size={'sm'}>
                                <Icon as={AntDesign} name="like1" size={'md'} />
                            </Avatar>
                            <Text fontSize="xs" color={'white'} fontWeight={'bold'}>{Object.values(likes).length}</Text>
                        </Center>
                    </Pressable>
                    <HStack space="1" alignItems="center">
                        <SubImages data={images} output={function (uri: string) {

                            setState(uri);
                        }} />

                    </HStack>
                    
                    <Pressable onPress={btnLikeClick} _pressed={{ backgroundColor: 'gray.700' }}>
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


interface ISub {
    data: IUpload[]
    output: (uri: string) => void
}


const SubImages = (props: ISub) => {

    const [state, setState] = useState<number>(0);

    const itemClicked = (index: number, uri: string) => {
        setState(index);
        props.output(uri)
    }

    useEffect(() => {
        setState(0)

    }, [props.data[0]])

    return (
        <>
            {Children.toArray(props.data.map(({ uri }, index) => (
                <Pressable onPress={() => itemClicked(index, uri)}  >
                    <Center
                        borderWidth={'2'}
                        borderColor={`${state === index ? 'blue.400' : 'white'}`}
                        size={'16'}
                    >
                        <Image
                            source={{ uri: uri }}
                            alt="Alternate Image"
                            style={{ resizeMode: 'contain' }}
                            size={'full'}
                        />
                    </Center>
                </Pressable>

            )))
            }
        </>
    )
}

export default Thumbnail;