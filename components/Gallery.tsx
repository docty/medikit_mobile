import React, { useEffect } from "react";
import { ActivityIndicator, useWindowDimensions } from 'react-native'
import { IGalleryCollection, ISrc } from "../types";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import { getFetch, getAnyKey } from "../utils/firebase-adapter";
import { values } from "ramda";
import Thumbnail from "./Thumbnail";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Button, Center, Icon, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


export const Gallery = () => {
    const { height } = useWindowDimensions();


    const queryMyDatabase = async ({ pageParam = 1 }: QueryFunctionContext) => {


        try {

            const pageParams = await getAnyKey()

            const response = await getFetch(pageParams)

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


    if (status === 'loading') {
        return (
            <Center flex={'1'}>
                <ActivityIndicator size={'large'} />
            </Center>
        )
    } else if (status === 'error') {

        return (
            <Center p="20" flex={'1'} >
                <Icon as={MaterialIcons} name="error-outline" size={'4xl'} />

                <Text fontSize="md" my={'4'}>{error as string}</Text>
                <Button
                    colorScheme="warning"
                    onPress={loadMore}
                >
                    Click Here to try again
                </Button>

            </Center>
        )

    } else if (status === 'success') {

        return (

            <FlashList
                data={data?.pages}
                renderItem={renderItem}
                estimatedItemSize={height}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                keyExtractor={(item, index) => index.toString()}
                pagingEnabled={true}
                refreshing={false}
                onRefresh={loadMore}
                ListFooterComponent={isFetching ? null : <ActivityIndicator />}
            />


        )
    } else {
        return <ActivityIndicator size={'large'} />
    }


}





