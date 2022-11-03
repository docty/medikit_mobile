import { Flex, HStack, Avatar, Text, ScrollView, Input, Center, Image, Icon, Box } from "native-base";
import React, { Children } from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from "react-native";



const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = 200

const CarouselCardItem = ({ item, index }: any) => {
    return (
        <Box bg="primary.400" rounded="lg" height={'200'}>
            <Image
                source={{ uri: item }}
                alt="Alternate Text"
                size={'200'}
                resizeMode={'cover'}
            />
        </Box>

    )
}


export const Search = () => {

    const trending = [
        'https://outfittrends.b-cdn.net/wp-content/uploads/2021/03/D5_PADGWAAAdSmO-400x500.jpeg',
        'https://d17a17kld06uk8.cloudfront.net/products/43VMDHH/CH3TJT57-default.jpg',
        'https://i0.wp.com/youstylezcollections.com/wp-content/uploads/2020/11/FB_IMG_16046429091841874.jpg?resize=720%2C720&ssl=1',
        'https://theglossychic.com/wp-content/uploads/2019/11/20191110_001641.jpg',
        'https://global2019-static-cdn.kikuu.com/upload-productImg-1583384640756.jpeg?x-oss-process=style/p85',
             ];

    const wedding = [
         
        'https://global2019-static-cdn.kikuu.com/upload-productImg-1583384640756.jpeg?x-oss-process=style/p85',
        'https://africanvibes.com/ezoimgfmt/i.etsystatic.com/25280270/r/il/ae96f4/2908311420/il_794xN.2908311420_owvr.jpg?ezimgfmt=rs:378x413/rscb92/ngcb92/notWebP',
        'https://clipkulture.com/wp-content/uploads/2020/04/158782323848kgn.jpg',
        'https://i.pinimg.com/736x/6d/34/9c/6d349c286bfb9fc1dc4863590278545b.jpg',
        'https://netstorage-tuko.akamaized.net/images/a91eb71fd624f490.jpg',
        'https://i.pinimg.com/564x/82/92/b5/8292b56c3eb975ab9356b85eb1160716.jpg',
            ];

    const outing = [
        
        
        'https://netstorage-tuko.akamaized.net/images/a91eb71fd624f490.jpg',
        'https://i.pinimg.com/564x/82/92/b5/8292b56c3eb975ab9356b85eb1160716.jpg',
        'https://i.pinimg.com/originals/f0/31/fc/f031fcc150866ef593f93274c6743de1.jpg',
        'https://i.pinimg.com/564x/50/23/d3/5023d3ab7186c23d12156acca31a4479.jpg',
        'https://i.pinimg.com/736x/e3/bb/13/e3bb132ceb1b9945291900281fcdd35b.jpg',
        'https://africanvibes.storage.googleapis.com/wp-content/uploads/2021/06/27184028/Ghana-traditional-bridesmaids-dress-1000x600.jpg'
    ];
    const isCarousel = React.useRef(null)
    return (
        <>
            <HStack bg={'white'} width={'full'} px={'3'} py={'4'}>
                <Input
                    placeholder="Search"
                    w={'full'}
                    fontSize={'sm'}
                    InputLeftElement={<Icon as={AntDesign} name="search1" />
                    }
                />
            </HStack>

            <ScrollView>


                <Text px={'3'} fontSize="lg" bg={'white'} color={'blueGray.700'} fontWeight={'semibold'}>Trending</Text>

                <Carousel
                    layout="default"
                    activeSlideAlignment={'start'}
                    ref={isCarousel}
                    data={trending}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}

                />

                <Text px={'3'} fontSize="lg" bg={'white'} color={'blueGray.700'} fontWeight={'semibold'}>Wedding Event</Text>

                <Carousel
                    layout="default"

                    ref={isCarousel}
                    data={wedding}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH} 
                    activeSlideAlignment={'start'}
                    inactiveSlideShift={0}
                    useScrollView={true}

                />

                <Text px={'3'} fontSize="lg" bg={'white'} color={'blueGray.700'} fontWeight={'semibold'}>Special Outing</Text>

                <Carousel
                    layout="default"
                    activeSlideAlignment={'start'}
                    ref={isCarousel}
                    data={outing}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}

                />
            </ScrollView>
        </>

    )
}
