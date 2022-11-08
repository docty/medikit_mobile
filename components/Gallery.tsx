import React from "react";
import { ActivityIndicator, useWindowDimensions } from 'react-native'
import { IGalleryCollection, ISrc } from "../types";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import { getRandomKey, getLength, getSingleData } from "../utils/firebase-adapter";
import { values } from "ramda";
import Thumbnail from "./Thumbnail";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Box } from "native-base";




export const Gallery = () => {
    const { height } = useWindowDimensions();


    const queryMyDatabase = ({ pageParam = getRandomKey(getLength()) }: QueryFunctionContext) => {
        const response = getSingleData(pageParam)
        return Promise.resolve(response)
    }



    const { data, fetchNextPage, isFetching, isSuccess } = useInfiniteQuery({
        queryKey: ['gallery'],
        queryFn: queryMyDatabase
    })



    const renderItem = ({ item }: ListRenderItemInfo<IGalleryCollection>) => {

        const { username, uid, src } = item

        const srcData = values(src)[0] as ISrc;

        if (isSuccess) {
            return (
                <Thumbnail username={username} uid={uid} src={srcData} />

            )
        } else return null
    }

     

    const loadMore = () => {
        const length = getLength();
        const pageParam = getRandomKey(length)
        fetchNextPage({ pageParam });
    }



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
}





