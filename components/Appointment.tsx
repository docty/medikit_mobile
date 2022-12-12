import { Box, HStack, Avatar, Text, ScrollView, Input, Center, Image, Icon, Button, VStack, Divider } from "native-base";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export const Appointment = () => {

    return (
        <ScrollView p={'4'} bg={'blue.100'}>
            <Box bg={'white'} p={'4'} shadow={'4'} rounded={'md'}>
                <HStack space="3" alignItems="center" justifyContent={'space-between'}>
                    <VStack space="1">
                        <Text fontSize="md" fontWeight={'bold'}>Dr. Asiedu Henry</Text>
                        <Text fontSize="xs">Heart</Text>
                        <Text fontSize="xs" fontWeight={'bold'}>120 Reviews</Text>
                    </VStack>
                    <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} alt={'Avatar'} />
                </HStack>
                <Divider mt={'2'} bg={'gray.100'} />
                <HStack my={'8'} space="3" alignItems="center" justifyContent={'space-between'}>
                    <Text fontSize="xs" fontWeight={'semibold'}>
                        <Icon as={Ionicons} mx={'1'} name="calendar-outline" />
                        Fri, Dec 30</Text>
                    <Text fontSize="xs" fontWeight={'semibold'}>
                        <Icon as={Ionicons} mx={'1'} name="alarm-outline" />
                        10:30AM</Text>
                    <Text fontSize="xs" fontWeight={'semibold'}>
                        <Icon as={Ionicons} mx={'1'} name="ellipse-sharp" color={'green.600'}/>
                        Confirmed</Text>
                </HStack>

                <Button.Group justifyContent={'space-between'}>
                    <Button colorScheme="danger" w={'2/5'} rounded={'full'}>Cancel</Button>
                    <Button colorScheme="teal" w={'2/5'} rounded={'full'}>Reschedule</Button>
                </Button.Group>

            </Box>

        </ScrollView>


    )


}
