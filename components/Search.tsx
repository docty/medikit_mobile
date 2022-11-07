import { Flex, HStack, Avatar, Text, ScrollView, Input, Center, Image, Icon, Box, Pressable } from "native-base";
import React, { Children, FunctionComponent, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from 'react-native-snap-carousel'
import { ActivityIndicator, Dimensions, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchByTag } from "../utils/firebase-adapter";
import { useQueries } from "react-query";
import { values } from "ramda";
import ViewImage from "./ViewImage";



// Use expo constant variable
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = 200

const CarouselCardItem = ({ item, index }: any) => {
    return (
        <ViewImage uri={values(item.upload)[0].uri} uid={''} />
    )
}


export const Search = () => {
   
    const [inputText, setInputText] = useState<string>('');

    const isCarousel = React.useRef(null)

    const queryWedding = () => {
        const response = fetchByTag('Wedding');
        return Promise.resolve(response);
    }

    const queryOuting = () => {
        const response = fetchByTag('Outing');
        return Promise.resolve(response);
    }


    const { "0": wedding, "1": outing } = useQueries([
        { queryKey: 'wedding', queryFn: queryWedding },
        { queryKey: 'outing', queryFn: queryOuting }
    ])



    useEffect(() => {

        Keyboard.addListener('keyboardDidHide', (event) => {
            setInputText('')
            console.log('Henry Asiedu');

        })
        return () => {
            Keyboard.removeAllListeners('keyboardDidHide')
        }

    }, [])

    if (wedding.isSuccess && outing.isSuccess) {
        return (
            <>
                <HStack bg={'white'} width={'full'} px={'3'} py={'4'}>
                    <Input
                        placeholder="Search"
                        w={'full'}
                        fontSize={'sm'}
                        value={inputText}
                        onChangeText={(event) => setInputText(event)}
                        InputLeftElement={<Icon as={AntDesign} name="search1" />
                        }
                    />
                </HStack>

                <ScrollView px={'2'} bg={'white'}>



                    <Text px={'3'} fontSize="lg" bg={'white'} color={'blueGray.700'} fontWeight={'semibold'}>Wedding Event</Text>

                    <Carousel
                        layout="default"

                        ref={isCarousel}
                        data={wedding.data}
                        renderItem={CarouselCardItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        activeSlideAlignment={'start'}
                        inactiveSlideShift={0}
                        useScrollView={true}
                        vertical={false}

                    />

                    <Text px={'3'} fontSize="lg" bg={'white'} color={'blueGray.700'} fontWeight={'semibold'}>Special Outing</Text>

                    <Carousel
                        layout="default"
                        activeSlideAlignment={'start'}
                        ref={isCarousel}
                        data={outing.data}
                        renderItem={CarouselCardItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        inactiveSlideShift={0}
                        useScrollView={true}
                        vertical={false}
                    />
                </ScrollView>
            </>

        )
    } else {
        return <ActivityIndicator size={'large'} />
    }
}
