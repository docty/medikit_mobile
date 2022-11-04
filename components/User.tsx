import { useNavigation, useRoute } from "@react-navigation/native";
import { Flex, HStack, Avatar, Text, Center, Button, Image, ScrollView, VStack, Divider, Box, Pressable } from "native-base";
import React, { Children, useEffect, useState } from "react";
import { HomeScreenNavigationProp, IGallery, ISrc, IUser, IUserData, UserRouterProp } from "../types";
import { gallery, user } from '../utils/galleryData'


const User = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    const { params } = useRoute<UserRouterProp>();
    const [response, setResponse] = useState<ISrc[]>([] as ISrc[]);
    const [individual, setIndividual] = useState<IUserData>({} as IUserData);

 
    const galleryData = Object.values(gallery);
    const userData = Object.values(user);

    useEffect(() => {
        const ad = galleryData.find(value => value.uuid === params?.uuid);
        const as = Object.values(ad!.src)
        setResponse(as)
    }, [])

    useEffect(() => {

        const ad = userData.find(value => value.uuid === params?.uuid);
        setIndividual(ad!)

    }, [])

    const btnOnEnlarge = (srcUuid: string, uploadUuid: string) => {
        console.log(srcUuid, uploadUuid);

        navigation.navigate('Enlarge', { user: individual.uuid, src: srcUuid, upload: uploadUuid })

    }
    const btnFollow = () => {
        console.log('btnFollow');

    }

    const btnUpload = () => {
        console.log('btnUpload');

    }

    return (
        <>

            <VStack bg={'white'} space="3" justifyContent={'center'} display={'flex'} alignItems={'center'} pt={'4'}>
                <Avatar
                    source={{ uri: individual.displayImage }}
                    size={'2xl'}
                />
                <Text fontSize="sm" fontWeight={'medium'}>@{individual?.name}</Text>
                <HStack space="4"  >
                    <Text fontSize="sm" color={'blueGray.700'}>{individual.followers} followers</Text>
                    <Divider orientation="vertical" />
                    <Text fontSize="sm">{individual.following} following</Text>
                </HStack>
                <VStack pb={'3'}>
                    {
                        'guest' === 'guest' ? <Button
                            colorScheme="primary"
                            px={'10'}
                            onPress={btnFollow}
                        >
                            Follow
                        </Button> : <Button
                            colorScheme="secondary"
                            onPress={btnUpload}
                            px={'10'}
                        >
                            Upload
                        </Button>
                    }

                </VStack>



            </VStack>


            <ScrollView bg={'white'}>

                <Flex w={'full'} flexDirection={'row'} flexWrap={'wrap'} px={'2'}>
                    {
                        Children.toArray(response!.map(item => (
                            Children.toArray(Object.values(item.upload).map(vv => (
                                <Center flexGrow={'1'} flexBasis={'150'} px={'1'} py={'2'}>
                                    <Pressable
                                        p="1"
                                        onPress={() => btnOnEnlarge(item.uuid, vv.uuid)}
                                    >

                                        <Image
                                            source={{ uri: vv.uri }}
                                            alt="Alternate Text"
                                            size={'300'}
                                            resizeMethod={'resize'}
                                            resizeMode={'cover'}
                                        />
                                    </Pressable>

                                </Center>

                            )))

                        )))
                    }


                </Flex>

            </ScrollView>

        </>
    )
}

export default User