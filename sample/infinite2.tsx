import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Actionsheet, Box, Button, Text, Fab, FlatList, Icon, Menu, Modal, Popover, Slide, Slider, StatusBar, Divider, Spinner, } from "native-base"
import React from "react"
import { Main } from "./Main"
import { Profile } from "./Profile"
import { Search } from "./Search"
import { useInfiniteQuery, useQuery } from 'react-query';



export const Tester = () => {



    const fetchAllGames = () => {
        const datas = ['200', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

        return {data: datas, nextPage: '/3'}
    }


    const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        'afrik',
        fetchAllGames,
        {
        
            getNextPageParam: lastPage => {
                // if (lastPage.next !== null) {
                //     return lastPage.next;
                // }
                

                return lastPage.nextPage;
            }
        }
    );

    const gameItemExtractorKey = (item: string, index: number) => {
        return index.toString();
    };

    const renderData = ({ item }: any) => {
        return (
            <Text fontSize='20' py='2'>
                {item}
            </Text>
        );
    };

    const loadMore = () => {
        console.log('end reached');
        
        if (hasNextPage) {
          //  fetchNextPage();
        }
    };

    const renderSpinner = () => {
        return <Spinner color='emerald.500' size='lg' />;
    };

    return isLoading ? (
        <Box
            flex={1}
            backgroundColor='white'
            alignItems='center'
            justifyContent='center'
        >
            <Spinner color='emerald.500' size='lg' />
        </Box>
    ) : (
        <Box flex={1} safeAreaTop backgroundColor='white'>
            <Box height={16} justifyContent={'center'} px={2}>
                <Text fontSize={28} fontWeight={'600'} color={'emerald.500'}>
                    Explore Games
                </Text>
            </Box>
            <Divider />
            <Box px={2}>
                <FlatList
                    data={data?.pages.map(page => page).flat()}
                    keyExtractor={gameItemExtractorKey}
                    renderItem={renderData}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.3}
                    ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
                />
            </Box>
        </Box>
    );
}