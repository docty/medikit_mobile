import { Box, HStack, Avatar, Text, ScrollView, Input, Center, Image, Icon, Button, VStack, Divider } from "native-base";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

export const Appointment = () => {

    return (
        <Box  p={'4'}  safeArea bg={'white'} flex={'1'}>
            <Text fontSize="2xl" fontWeight={'bold'} textAlign={'center'}>Appointment</Text>

            <ScrollView   mt={StatusBar.currentHeight}>
                <Box bg={'white'} p={'4'}borderWidth={'1'} borderColor={'gray.100'} rounded={'md'}>
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
                            <Icon as={Ionicons} mx={'1'} name="ellipse-sharp" color={'green.600'} />
                            Confirmed</Text>
                    </HStack>

                    <Button.Group justifyContent={'space-between'}>
                        <Button colorScheme="danger" w={'2/5'} rounded={'lg'}>Cancel</Button>
                        <Button colorScheme="teal" w={'2/5'} rounded={'lg'}>Reschedule</Button>
                    </Button.Group>

                </Box>

            </ScrollView>

        </Box>
    )


}
