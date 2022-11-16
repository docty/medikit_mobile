import { AntDesign } from "@expo/vector-icons";
import { Flex, HStack, Avatar, Text, Button, ScrollView, VStack, Divider, Icon, Spacer } from "native-base";
import { values } from "ramda";
import React, { Children } from "react";
import { ActivityIndicator } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useQueries } from "react-query";
import { IUpload } from "../types";
import { getIndividualData, getIndividualUser } from "../utils/firebase-adapter";
import { ITEM_WIDTH, SLIDER_WIDTH } from "./Search";
import { useSession } from "./Session";
import ViewImage from "./ViewImage";




export const Profile = () => {

    const { session } = useSession();


    const getProfile = async () => {
        console.log(session);

        const response = await getIndividualData(session)
        return Promise.resolve(response);
    }


    const getUser = async () => {
        const response = await getIndividualUser(session)
        return Promise.resolve(response);
    }


    const { "0": profile, "1": user } = useQueries([
        { queryKey: 'profile', queryFn: getProfile },
        { queryKey: 'user', queryFn: getUser }
    ])


    // TODO: Configure the image upload correctly
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

                {/* <ScrollView bg={'white'} px={'3'}>
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

                </ScrollView> */}

            </>
        )
    }
    else {
        return <ActivityIndicator size={'large'} />
    }


}


const CarouselCardItem = ({ item, index }: { item: IUpload, index: number }) => {


    return (
        <ViewImage {...item} />

    )
}