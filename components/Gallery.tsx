import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, useWindowDimensions } from 'react-native'
import { IGalleryCollection, ISrc } from "../types";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import { getFetch, getAnyKey } from "../utils/firebase-adapter";
import { values } from "ramda";
import Thumbnail from "./Thumbnail";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Box, Button, Center, HStack, Icon, Text, Image, Input, IconButton, ScrollView, VStack, Pressable } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = 400;


export const Gallery = () => {
    const { height } = useWindowDimensions();
    const isCarousel = React.useRef(null);

    const queryMyDatabase = async ({ pageParam = 1 }: QueryFunctionContext) => {


        try {

            const pageParams = await getAnyKey()

            const response = await getFetch('pageParams')

            return Promise.resolve(response)
        } catch {
            console.log('error');

            return Promise.reject('Network Failed')
        }
    }



    const { data, fetchNextPage, isFetching, status, error } = useInfiniteQuery({
        queryKey: ['gallery'],
        queryFn: queryMyDatabase
    })



    const renderItem = ({ item }: ListRenderItemInfo<IGalleryCollection>) => {

        const { username, uid, src, displayImage } = item

        const srcData = values(src)[0] as ISrc;

        return (
            <Thumbnail username={username} uid={uid} src={srcData} displayImage={displayImage} />

        )

    }



    const loadMore = async () => {

        fetchNextPage({ pageParam: 1 });
    }


    const categories = [
        {
            name: 'Heart',
            icon: <Icon as={Ionicons} size={'2xl'} name="heart-outline" />,
        },
        {
            name: 'ENT',
            icon: <Icon as={Ionicons} size={'2xl'} name="water-outline" />
        },
        {
            name: 'Skin',
            icon: <Icon as={Ionicons} size={'2xl'} name="thermometer-outline" />
        },
        {
            name: 'Stomach',
            icon: <Icon as={Ionicons} size={'2xl'} name="nuclear-outline" />
        }
    ];

    const doctors = [
        {
            name: 'Dr. Asiedu Henry',
            field: 'Surgeon',
            reviews: '43',
            price: '42'
        },
        {
            name: 'Dr. Fosu Priscilla',
            field: 'Heart',
            reviews: '23',
            price: '92'
        },
        {
            name: 'Dr. Adwoa Josephine',
            field: 'Surgeon',
            reviews: '73',
            price: '56'
        },
        {
            name: 'Dr. Developer Team',
            field: 'Hearing',
            reviews: '121',
            price: '100'
        }
    ];

    const CategoryItem = ({ item, index }: any) => {
        return (
            <Pressable
                bg={'white'}
                p={'2'}
                shadow={'4'}
                onPress={() => {
                    console.log('hello')
                }}

            >
                <Center  >
                    {item.icon}
                    <Text fontSize="sm" fontWeight={'bold'}>{item.name}</Text>

                </Center>
            </Pressable>

        )
    }

    const DoctorsItem = ({ item, index }: any) => {
        return (
            <Pressable
                onPress={() => {
                    console.log('hello')
                }}

            >
                <HStack space="3" p={'4'} alignItems="center" bg={'white'} shadow={'4'} rounded={'lg'}>
                    <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} />
                    <VStack space="1" >
                        <Text fontSize="md" fontWeight={'bold'}>{item.name}</Text>
                        <Text fontSize="xs" >{item.field}</Text>
                        <Text fontSize="xs">{item.reviews} Reviews</Text>
                    </VStack>
                    <VStack space="3" alignItems="center" ml={'auto'}>
                        <Icon as={Ionicons} name="heart" color={'red.500'} />
                        <Text fontSize="md" fontWeight={'bold'}>${item.price}</Text>
                    </VStack>
                </HStack>
            </Pressable>


        )
    }
    return (
        <>
            <Box p="4" bg={'blue.50'}>
                <Text fontWeight={'semibold'} fontSize="xs">Hi, Developer</Text>
                <HStack justifyContent={'space-between'} space="3" alignItems="center">
                    <Text fontSize="lg" fontWeight={'bold'}>Find your Doctor!</Text>
                    <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} />
                </HStack>
                <HStack space="3" alignItems="center" mt={'4'} >
                    <Input bg={'white'} InputLeftElement={<Icon as={Ionicons} name="search-outline" ml={'2'} />
                    } placeholder="Search for a doctor" rounded={'full'} flex={'1'} />
                    <IconButton
                        variant="solid"
                        colorScheme={'success'}
                        icon={<Icon size="md" as={Ionicons} name="options-outline" color="white" />}
                        onPress={() => {
                            console.log('hello')
                        }}

                    />
                </HStack>
            </Box>
            <ScrollView p="4" bg={'blue.50'}>
                <Box my={'2'}>
                    <HStack justifyContent={'space-between'} space="3" alignItems="center">
                        <Text fontWeight={'bold'} fontSize="md">Appointments</Text>
                        <Button
                            variant={'ghost'}
                            colorScheme="primary"
                            onPress={() => null}
                            _text={{ fontWeight: 'semibold' }}
                        >
                            See all
                        </Button>
                    </HStack>
                    <HStack space="3" p={'4'} alignItems="center" bg={'blueGray.600'} rounded={'lg'}>
                        <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} />
                        <VStack space="1" >
                            <Text fontSize="md" color={'white'} fontWeight={'semibold'}>Dr. Asiedu Henry</Text>
                            <Text fontSize="xs" color={'white'}>Surgeon</Text>
                            <Text fontSize="sm" color={'white'} fontWeight={'semibold'}>Today, 02:00PM</Text>
                        </VStack>
                        <IconButton
                            variant="ghost"
                            icon={<Icon size="md" as={Ionicons} name="chevron-forward-outline" color="white" />}
                            onPress={() => {
                                console.log('hello')
                            }}
                            ml={'auto'}
                        />
                    </HStack>
                </Box>


                <Box my={'2'}>
                    <HStack justifyContent={'space-between'} space="3" alignItems="center">
                        <Text fontWeight={'bold'} fontSize="md">Categories</Text>
                        <Button
                            variant={'ghost'}
                            colorScheme="primary"
                            onPress={() => null}
                            _text={{ fontWeight: 'semibold' }}
                        >
                            See all
                        </Button>
                    </HStack>
                    <Carousel
                        layout="default"
                        activeSlideAlignment={'start'}
                        ref={isCarousel}
                        data={categories}
                        renderItem={CategoryItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={200}
                        inactiveSlideShift={0}
                        useScrollView={true}
                        vertical={false}
                    />

                </Box>



                <Box my={'2'}>
                    <HStack justifyContent={'space-between'} space="3" alignItems="center">
                        <Text fontWeight={'bold'} fontSize="md">Popular Doctors</Text>
                        <Button
                            variant={'ghost'}
                            colorScheme="primary"
                            onPress={() => null}
                            _text={{ fontWeight: 'semibold' }}
                        >
                            See all
                        </Button>
                    </HStack>
                    <Carousel
                        layout="default"
                        activeSlideAlignment={'start'}
                        ref={isCarousel}
                        data={doctors}
                        renderItem={DoctorsItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        inactiveSlideShift={0}
                        useScrollView={true}
                        vertical={false}
                    />

                </Box>

            </ScrollView>


        </>

    )

}





