import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Flex, HStack, Avatar, Text, Center, Button, Image, ScrollView, VStack, Divider, Box, Pressable, Icon } from "native-base";
import { type, values } from "ramda";
import React, { Children } from "react";
import { ActivityIndicator, ToastAndroid } from "react-native";
import { useMutation, useQueries } from "react-query";
import { HomeScreenNavigationProp, UserRouterProp } from "../types";
import { getIndividualData, getIndividualUser, setFollowUser } from "../utils/firebase-adapter";
import { useSession } from "./Session";


const toast = ToastAndroid;

const User = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    const { params } = useRoute<UserRouterProp>();
    const { session } = useSession()

    const getProfile = async () => {
        try {
            const response = await getIndividualData(params?.uid)
            return Promise.resolve(response);
        } catch {
            return Promise.reject('Network Failed')
        }

    }


    const getUser = async () => {
        try {
            const response = await getIndividualUser(params?.uid)

            return Promise.resolve(response);
        }
        catch {
            return Promise.reject('Network Failed')
        }
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



    if (user.status === 'loading' || profile.status === 'loading') {
        return (
            <Center flex={'1'}>
                <ActivityIndicator size={'large'} />
            </Center>
        )
    } else if (user.status === 'error' || profile.status === 'error') {

        return (
            <Center p="20" flex={'1'} >
                <Icon as={MaterialIcons} name="error-outline" size={'4xl'} />

                <Text fontSize="md" my={'4'}>{user.error as string}</Text>
                <Button
                    colorScheme="warning"
                    onPress={getProfile}
                >
                    Click Here to try again
                </Button>

            </Center>
        )

    } else if (profile.status === 'success' && user.status === 'success') {

        return (
            <>
                <VStack bg={'white'} space="3" justifyContent={'center'} display={'flex'} alignItems={'center'} pt={'4'}>
                    <Avatar
                        source={{ uri: user.data.displayImage }}
                        size={'2xl'}
                    />
                    <Text fontSize="sm" fontWeight={'medium'}>@{user.data!.username}</Text>
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