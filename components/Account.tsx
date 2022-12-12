import { useNavigation } from "@react-navigation/native";
import { Button, Text, VStack, Box } from "native-base";
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
                
                <VStack space="32"w={'full'} >
                    <Box px={'6'} w={'full'}>

                        <Text color={'white'} textAlign={'center'} fontWeight={'bold'} fontSize={'5xl'}>Welcome to Medikit</Text>
                    </Box>

                    <Box mx={'auto'} w={'3/4'}>
                        <Button colorScheme={'success'} onPress={() => navigate('Login')} rounded={'full'} p={'4'} _text={{fontWeight: 'bold'}} >
                            Login
                        </Button>
                        <Button variant={'outline'} bg={'white'} mt={'6'} onPress={() => navigate('Register')} rounded={'full'} p={'4'} _text={{fontWeight: 'bold'}}> 
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
