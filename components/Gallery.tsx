import React from "react";
import { ActivityIndicator, useWindowDimensions } from 'react-native'
import { IGalleryCollection, ISrc } from "../types";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import { getRandomKey, getLength, getFetch } from "../utils/firebase-adapter";
import { values } from "ramda";
import Thumbnail from "./Thumbnail";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";


export const Gallery = () => {
    const { height } = useWindowDimensions();


    const queryMyDatabase = async ({ pageParam = 1 }: QueryFunctionContext) => {

        const length = await getLength();
        const pageParams = await getRandomKey(length)

        const response = await getFetch(pageParams)


        return Promise.resolve(response)
    }



    const { data, fetchNextPage, isFetching, isSuccess } = useInfiniteQuery({
        queryKey: ['gallery'],
        queryFn: queryMyDatabase
    })



    const renderItem = ({ item }: ListRenderItemInfo<IGalleryCollection>) => {

        const { username, uid, src, displayImage } = item

        const srcData = values(src)[0] as ISrc;

        if (isSuccess) {
            return (
                <Thumbnail username={username} uid={uid} src={srcData} displayImage={displayImage} />

            )
        } else return null
    }



    const loadMore = async () => {

        fetchNextPage({ pageParam: 1 });
    }



    return (

        <FlashList
            data={data?.pages}
            renderItem={renderItem}
            estimatedItemSize={height}
            // onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            keyExtractor={(item, index) => index.toString()}
            pagingEnabled={true}
            refreshing={false}
            onRefresh={loadMore}
            ListFooterComponent={isFetching ? null : <ActivityIndicator />}
        />


    )
}





