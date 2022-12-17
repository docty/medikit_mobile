import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Box, Center, HStack, VStack, Image, Text, Icon, Pressable, Switch } from "native-base"

import React from 'react'

export const Settings = () => {
    const { navigate } = useNavigation<any>();

    return (
        <VStack space="5" safeArea p={'4'} bg={'white'} flex={'1'}>
 <Text  fontSize="2xl" fontWeight={'bold'} textAlign={'center'}>Settings</Text>
            
            <Pressable
                onPress={() => navigate('Profile')}
		borderBottomWidth={'1'} borderColor={'gray.100'}
            >
                <HStack space="3" bg={'white'} rounded={'full'} py={'2'} px={'4'} alignItems="center">
                    <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} alt={'Avatar'} />
                    <Text fontSize="sm" fontWeight={'bold'}>My Profile</Text>
                    <Icon as={Ionicons} size={'md'} name="chevron-forward-outline" ml={'auto'} />
                </HStack>
            </Pressable>

            <Pressable
                onPress={() => {
                    console.log('hello')
                }}
borderBottomWidth={'1'} borderColor={'gray.100'}
            >
                <HStack space="3" bg={'white'} rounded={'full'} py={'5'} px={'4'} alignItems="center">
                    <Icon as={Ionicons} size={'md'} name="chevron-forward-outline" />
                    <Text fontSize="sm" fontWeight={'bold'}>Payment Meethod</Text>
                    <Icon as={Ionicons} size={'md'} name="chevron-forward-outline" ml={'auto'} />
                </HStack>
            </Pressable>

            <Pressable
                onPress={() => {
                    console.log('hello')
                }}
borderBottomWidth={'1'} borderColor={'gray.100'}
            >
                <HStack space="3" bg={'white'} rounded={'full'} py={'5'} px={'4'} alignItems="center">
                    <Icon as={Ionicons} size={'md'} name="chevron-forward-outline" />
                    <Text fontSize="sm" fontWeight={'bold'}>Dark Mode</Text>
                    <Switch ml={'auto'} />

                </HStack>
            </Pressable>

            <Pressable
                onPress={() => {
                    console.log('hello')
                }}
borderBottomWidth={'1'} borderColor={'gray.100'}
            >
                <HStack space="3" bg={'white'} rounded={'full'} py={'5'} px={'4'} alignItems="center">
                    <Icon as={Ionicons} size={'md'} name="chevron-forward-outline" />
                    <Text fontSize="sm" fontWeight={'bold'}>Logout</Text>
                    <Icon as={Ionicons} size={'md'} name="chevron-forward-outline" ml={'auto'} />
                </HStack>
            </Pressable>




        </VStack>


    )
}