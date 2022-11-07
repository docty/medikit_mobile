import { HStack, Avatar, Text, Image, Box, Icon, Center, ScrollView, FlatList, ZStack, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { Children, useState, useEffect } from "react";
import { ListRenderItem, ListRenderItemInfo, useWindowDimensions, ActivityIndicator, Dimensions, StatusBar } from 'react-native'
import { gallery } from '../utils/galleryData'
import { useNavigation, } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { HomeScreenNavigationProp, IGallery, ISrc } from "../types";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import { getRandomKey, getLength, getSingleData } from "../utils/firebase-adapter";
import { keys } from "ramda";
import Thumbnail from "./Thumbnail";




export const Gallery = () => {

    const { height } = useWindowDimensions();

    const queryMyDatabase = ({ pageParam = getRandomKey(getLength()) }: QueryFunctionContext) => {

        const response = getSingleData(pageParam)

        return Promise.resolve(response)
    }

    const { data, fetchNextPage, isFetching } = useInfiniteQuery({
        queryKey: ['gallery'],
        queryFn: queryMyDatabase
    })


    useEffect(() => {
        // console.log(data?.pages);


    }, [data]);


    const renderItem = ({ item }: ListRenderItemInfo<any>) => {
        const key = keys(item)[0];

        const { username, uid, src } = item[key];
        const values = Object.values(src)[0] as ISrc;


        return (
            <Thumbnail username={username} uid={uid} src={values} />

        )
    }


    const loadMore = () => {
        const length = getLength();
        const pageParam = getRandomKey(length)

        fetchNextPage({ pageParam });

    }



    return (
        <FlatList
            data={data?.pages}
            renderItem={renderItem}
            initialNumToRender={4}
            onEndReached={loadMore}
            onEndReachedThreshold={20}
            keyExtractor={(item, index) => index.toString()}
            pagingEnabled={true}
            ListFooterComponent={isFetching ? null : <ActivityIndicator />}

        />

    )
}





