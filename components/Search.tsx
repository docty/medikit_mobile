import { Flex, HStack, Avatar, Text, ScrollView, Input, Center, Image } from "native-base";
import React from "react";

export const Search = () => {

    return (
        <>
            <Input placeholder="Default Input" />

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
