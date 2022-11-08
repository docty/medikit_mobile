import { AntDesign } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Box, ZStack, Center, HStack, Avatar, Icon, Image, Text } from "native-base";
import { isEmpty, values } from "ramda";
import React, { Children, useEffect, useState } from "react";
import { Pressable, useWindowDimensions } from "react-native";
import { IGallery, HomeScreenNavigationProp, IUpload } from "../types";
import { downloadFile } from "../utils/download";

 
const Thumbnail = ({ username, uid, src }: IGallery) => {

    const { comments, likes, upload } = src;
    const images = values(upload);

    const { height } = useWindowDimensions();
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [state, setState] = useState<string>('');
    const [like, setLike] = useState<boolean>(false);
    const bottomTabBarHeight = useBottomTabBarHeight()


    const currentHeight = height - bottomTabBarHeight;


    const btnTitleClick = (username: string, uid: string) => {
        navigation.navigate('User', { username, uid })
    }

    const btnDownloadClick = () => {
        downloadFile(isEmpty(state) ? images[0].uri : state) 
    }

    const btnCommentClick = () => {
        console.log('btnCommentClick');
    }

    const btnLikeClick = () => {
        setLike(p => !p);
        console.log('btnLikeClick');
    }


    useEffect(() => {
        setState('')

    }, [src])


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
                        <SubImages data={images} output={function (uri: string) {

                            setState(uri);
                        }} />

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