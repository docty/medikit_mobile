import React, { } from "react";
import { ActivityIndicator, SafeAreaView } from 'react-native'
import { ISrc } from "../types";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import { getRandomKey, getLength, getSingleData } from "../utils/firebase-adapter";
import { keys } from "ramda";
import Thumbnail from "./Thumbnail";
import { FlashList } from "@shopify/flash-list";




export const Gallery = () => {

    const queryMyDatabase = ({ pageParam = getRandomKey(getLength()) }: QueryFunctionContext) => {
        const response = getSingleData(pageParam)

        return Promise.resolve(response)
    }



    const { data, fetchNextPage, isFetching, isSuccess } = useInfiniteQuery({
        queryKey: ['gallery'],
        queryFn: queryMyDatabase
    })



    const renderItem = ({ item, index }: any) => {
        const key = keys(item)[0];

        const { username, uid, src } = item[key];
        const values = Object.values(src)[0] as ISrc;




        if (isSuccess)
            return (
                <Thumbnail username={username} uid={uid} src={values} />
            )
        else return null
    }



    const loadMore = () => {
        const length = getLength();
        const pageParam = getRandomKey(length)


        fetchNextPage({ pageParam });

    }



    return (
        <SafeAreaView>
            <FlashList
                data={data?.pages}
                renderItem={renderItem}
                estimatedItemSize={200}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                keyExtractor={(item, index) => index.toString()}
                pagingEnabled={true}
                refreshing={false}

                onRefresh={loadMore}
                ListFooterComponent={isFetching ? null : <ActivityIndicator />}
            />
        </SafeAreaView>

    )
}





