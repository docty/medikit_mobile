import { Flex, HStack, Avatar, Text, Center, Button, Image, ScrollView } from "native-base";
import React from "react";

export const Profile = () => {
    return (
        <>
            <Flex my="4" justifyContent={'center'} alignItems={'center'}>
                <Avatar size={'2xl'}>  SS </Avatar>
                <Text fontSize="xs">@decimalvalues</Text>
                <HStack space="8" alignItems="center">
                    <Center>
                        <Text fontSize="xs">120k followers</Text>
                    </Center>
                    <Center  >
                        <Text fontSize="xs">20k following</Text>
                    </Center>

                </HStack>

                <Button
                    colorScheme="primary"
                    onPress={() => {
                        console.log('hello')
                    }}

                >
                    Follow
                </Button>

                <Button
                    colorScheme="primary"
                    onPress={() => {
                        console.log('hello')
                    }}
                    alignSelf={'flex-end'}
                >
                    Upload
                </Button>
            </Flex>
            <ScrollView>
                <HStack space="3" alignItems="center">
                    <Center flex={'1'}>
                        <Image
                            source={require('../assets/image1.png')}
                            alt="Alternate Text"
                            width={'full'}

                            src="../assets/image1.png"
                        />
                        <Text fontSize="xs">  @decimalvalues</Text>
                    </Center>
                    <Center flex={'1'}>
                        <Image
                            source={require('../assets/image1.png')}
                            alt="Alternate Text"
                            width={'full'}

                            src="../assets/image1.png"
                        />
                        <Text fontSize="xs">  @decimalvalues</Text>
                    </Center>

                </HStack>

                <HStack space="3" alignItems="center">
                    <Center flex={'1'}>
                        <Image
                            source={require('../assets/image1.png')}
                            alt="Alternate Text"
                            width={'full'}

                            src="../assets/image1.png"
                        />
                        <Text fontSize="xs">  @decimalvalues</Text>
                    </Center>
                    <Center flex={'1'}>
                        <Image
                            source={require('../assets/image1.png')}
                            alt="Alternate Text"
                            width={'full'}
                            src="../assets/image1.png"
                        />
                        <Text fontSize="xs">  @decimalvalues</Text>
                    </Center>

                </HStack>

                <HStack space="3" alignItems="center">
                    <Center flex={'1'}>
                        <Image
                            source={require('../assets/image1.png')}
                            alt="Alternate Text"
                            width={'full'}
                            src="../assets/image1.png"
                        />
                        <Text fontSize="xs">  @decimalvalues</Text>
                    </Center>
                    <Center flex={'1'}>
                        <Image
                            source={require('../assets/image1.png')}
                            alt="Alternate Text"
                            width={'full'}

                            src="../assets/image1.png"
                        />
                        <Text fontSize="xs">  @decimalvalues</Text>
                    </Center>

                </HStack>

            </ScrollView>

        </>
    )
}
