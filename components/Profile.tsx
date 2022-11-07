import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Flex, HStack, Avatar, Text, Center, Button, Image, ScrollView, VStack, Divider, Pressable, Icon, Spacer } from "native-base";
import { values } from "ramda";
import React, { Children } from "react";
import { ActivityIndicator } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useQueries } from "react-query";
import { HomeScreenNavigationProp, IUpload } from "../types";
import { getIndividualData, getIndividualUser } from "../utils/firebase-adapter";
import { ITEM_WIDTH, SLIDER_WIDTH } from "./Search";


const CarouselCardItem = ({ item, index }: { item: IUpload, index: number }) => {

    return (
        <Center flexGrow={'1'} flexBasis={'150'} py={'2'}>
            <Pressable onPress={() => console.log(item.uid)}>

                <Image
                    source={{ uri: item.uri }}
                    alt="Alternate Text"
                    size={'300'}
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                />
            </Pressable>

        </Center>


    )
}

export const Profile = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>()

    const getProfile = () => {
        const response = getIndividualData('450943jklglmkwlerlt5l')
        return Promise.resolve(response);
    }

    const getUser = () => {
        const response = getIndividualUser('450943jklglmkwlerlt5l')
        return Promise.resolve(response);
    }


    const { "0": profile, "1": user } = useQueries([
        { queryKey: 'profile', queryFn: getProfile },
        { queryKey: 'user', queryFn: getUser }
    ])




    const btnOnEnlarge = (srcuid: string, uploaduid: string) => {
        console.log(srcuid, uploaduid);

        navigation.navigate('Enlarge', { user: user.data?.uid!, src: srcuid, upload: uploaduid })

    }



    const btnUpload = () => {
        console.log('btnUpload');
    }

    const isCarousel = React.useRef(null)

    if (profile.isSuccess && user.isSuccess) {
        return (
            <>
                <VStack bg={'white'} space="3" justifyContent={'center'} display={'flex'} alignItems={'center'} pt={'4'}>
                    <Avatar
                        source={{ uri: user.data?.displayImage }}
                        size={'2xl'}
                    />
                    <Text fontSize="sm" fontWeight={'medium'}>@{user.data?.username}</Text>
                    <HStack space="4"  >
                        <Text fontSize="sm" color={'blueGray.700'}>{values(user.data?.followers!).length} followers</Text>
                        <Divider orientation="vertical" />
                        <Text fontSize="sm">{values(user.data?.following!).length} following</Text>
                    </HStack>
                    <VStack pb={'3'}>
                        <Button
                            colorScheme="secondary"
                            onPress={btnUpload}
                            px={'10'}
                        >
                            Upload
                        </Button>
                    </VStack>



                </VStack>

                <ScrollView bg={'white'} px={'3'}>
                    {
                        Children.toArray(values(profile.data.src).map(item => (
                            <VStack space="1">
                                <Carousel
                                    layout="default"
                                    activeSlideAlignment={'start'}
                                    ref={isCarousel}
                                    data={values(item.upload)}
                                    renderItem={CarouselCardItem}
                                    sliderWidth={SLIDER_WIDTH}
                                    itemWidth={ITEM_WIDTH}
                                    inactiveSlideShift={0}
                                    useScrollView={true}
                                    vertical={false}
                                    keyExtractor={(item) => item.uid}

                                />

                                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                                    <HStack space="2" alignItems="center">
                                        <Icon as={AntDesign} name="heart" />
                                        <Text fontSize="sm">{values(item.likes).length} likes</Text>
                                    </HStack>
                                    <HStack space="2" alignItems="center">
                                        <Icon as={AntDesign} name="like1" />
                                        <Text fontSize="sm">{values(item.comments).length} comments</Text>
                                    </HStack>
                                </Flex>
                                <Spacer my={'3'} />
                            </VStack>



                        )))
                    }

                </ScrollView>

            </>
        )
    }
    else {
        return <ActivityIndicator size={'large'} />
    }


}
