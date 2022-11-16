import { useNavigation, useRoute } from "@react-navigation/native";
import { Flex, HStack, Avatar, Text, Center, Button, Image, ScrollView, VStack, Divider, Box, Pressable } from "native-base";
import { type, values } from "ramda";
import React, { Children, useEffect } from "react";
import { ActivityIndicator, ToastAndroid } from "react-native";
import { useMutation, useQueries } from "react-query";
import { HomeScreenNavigationProp, IGallery, ISrc, IUser, IUserData, UserRouterProp } from "../types";
import { getIndividualData, getIndividualUser, setFollowUser } from "../utils/firebase-adapter";
import { useSession } from "./Session";


const toast = ToastAndroid;

const User = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    const { params } = useRoute<UserRouterProp>();
    const { session } = useSession()

    const getProfile = async () => {
        const response = await getIndividualData(params?.uid)
        return Promise.resolve(response);
    }


    const getUser = async () => {
        const response = await getIndividualUser(params?.uid)
        return Promise.resolve(response);
    }

    const followUser = (id: string) => {

        return setFollowUser(id)
    }

    const { "0": profile, "1": user } = useQueries([
        { queryKey: ['profile'], queryFn: getProfile },
        { queryKey: ['user'], queryFn: getUser }
    ])


    const { mutate, data } = useMutation({
        mutationKey: ['follow'],
        mutationFn: followUser
    })

    const btnOnEnlarge = (uri: string) => {
        navigation.navigate('Enlarge', { uri })
    }

    const btnFollow = () => {

        if (type(session) === 'Null') {
            return toast.show('Login to like a design', 300)
        }

        console.log('btnFollow');

        mutate(session)
    }

    useEffect(() => {
        console.log(user.data);

    }, [profile])

    if (profile.isSuccess && user.isSuccess) {
        return (
            <>



                <VStack bg={'white'} space="3" justifyContent={'center'} display={'flex'} alignItems={'center'} pt={'4'}>
                    <Avatar
                        source={{ uri: user.data.displayImage }}
                        size={'2xl'}
                    />
                     <Text fontSize="sm" fontWeight={'medium'}>@{user.data.username}</Text>
                    <HStack space="4"  >
                        <Text fontSize="sm" color={'blueGray.700'}>{values(user.data.followers).length} followers</Text>
                        <Divider orientation="vertical" />
                        <Text fontSize="sm">{values(user.data.following).length} following</Text> 
                    {/* TODO: Displayed the number of likes for the user  */}
                     </HStack>
                    <VStack pb={'3'}>
                        <Button
                            colorScheme="primary"
                            px={'10'}
                            onPress={btnFollow}
                        >
                            Follow
                        </Button>

                    </VStack>



                </VStack>
                

                <ScrollView bg={'white'}>

                    <Flex w={'full'} flexDirection={'row'} flexWrap={'wrap'} px={'2'}>
                        {
                            Children.toArray(values(profile.data.src).map(item => (
                                Children.toArray(Object.values(item.upload).map(({ uri }) => (
                                    <Center flexGrow={'1'} flexBasis={'150'} px={'1'} py={'2'}>
                                        <Pressable
                                            p="1"
                                            onPress={() => btnOnEnlarge(uri)}
                                        >

                                            <Image
                                                source={{ uri }}
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
    } else {
        return <ActivityIndicator size={'large'} />
    }
}

export default User