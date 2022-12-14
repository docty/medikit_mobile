import { useNavigation } from "@react-navigation/native";
import { Button, Text, VStack, Box, Center } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";


export const Account = () => {
    const { navigate } = useNavigation<any>()


    return (
        <Box bg={'white'} flex={1} safeArea>
            <ImageBackground
                source={require('../assets/1.jpg')}
                style={style.backgroundImage}
            >
                <Box bg={'black'} top={'0'} opacity={'0.8'} bottom={'0'} left={'0'} right={'0'} position={'absolute'} >d</Box>
                <VStack space="32" w={'full'} >
                    <Center px={'6'} w={'full'}>
                        <Text color={'white'} fontWeight={'bold'} fontSize={'6xl'}> <Text color={'pink.700'}>Medi</Text>kit</Text>
                        <Text fontSize="md" color={'white'} >Choose your own virtual doctor</Text>

                    </Center>

                    <Box mx={'auto'} w={'3/4'}>
                        <Button colorScheme={'amber'} onPress={() => navigate('Login')} rounded={'xl'} p={'4'} _text={{ fontWeight: 'bold' }} >
                            Login
                        </Button>
                        <Button bg={'white'} mt={'8'} onPress={() => navigate('Register')} rounded={'xl'} p={'4'} _text={{ fontWeight: 'bold', color: 'amber.600' }} _hover={{ _text: { color: 'white' }, bg: 'pink.700' }}>
                            Create account
                        </Button>
                    </Box>

                </VStack>
            </ImageBackground>

        </Box>
    )
}

const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
