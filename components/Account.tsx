import { AntDesign, Fontisto } from "@expo/vector-icons";
import { Center, Button, Text, Image, VStack, Icon, Input, Box, ZStack } from "native-base";
import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { IAccount } from "../types";
import { registerUser } from "../utils/firebase-adapter";
import { setItemAsync } from 'expo-secure-store'
import { useSession } from "./Session";
import { ImageBackground, useWindowDimensions, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";



type IActive = 'register' | 'login'

export const Account = () => {
     
    const [active, setActive] = useState<boolean>(false);
    const [section, setSection] = useState<IActive>('register');
    const [user, setUser] = useState<IAccount>({
        email: 'developer@afrik.com',
        fullName: 'Afrik Team',
        username: 'deveoper',
        password: '123456789'
    } as IAccount)
    const { setSession } = useSession();
    const navigation = useNavigation<any>();
    const sendData = async (response: any) => {

        return await registerUser(response);

    }

    const { mutate, data, isSuccess } = useMutation({
        mutationKey: ['sendData'],
        mutationFn: sendData
    })


    useEffect(() => {
        if (isSuccess) {
            setItemAsync('credentials', data.uid).then(res => {
                setSession('credentials')
            })
        }

    }, [data]);


    const onbtnClick = (id: IActive) => {
        setActive(true)
        setSection(id)

        if (active) {
            // setUser({} as IAccount)
            mutate(user)
        }

    }



    const panel = {
        register: <Register setUser={(value) => setUser(value)} user={user} />,
        login: <Login setUser={(value) => setUser(value)} user={user} />
    }


    return (
        <Box flex={1} safeAreaTop>
            <ImageBackground
                source={require('../assets/1.jpg')}
                style={style.imageBackground}

            >
                <Box  bg="black" position={'absolute'} top={'0'} left={'0'} right={'0'} bottom={'0'} opacity={'0.8'}>
                    Box
                </Box>
                
                <Box px={'6'}  w={'full'}>
                    <Text textAlign={'center'} fontWeight={'bold'} color={'white'} fontSize={'5xl'}>Stay Healthy Live Well</Text>
                </Box>


                <VStack space="5" mt={'16'} w={'1/2'}>
                    <Button rounded={'full'}  _text={{fontWeight: 'bold'}} background={'emerald.500'} onPress={() => navigation.navigate('Login')}>
                        Login
                    </Button>
                    <Button rounded={'full'} background={'white'} _text={{color: 'blue.500', fontWeight: 'bold'}} onPress={() => navigation.navigate('Register')}>
                        Create account
                    </Button>
                </VStack>

             </ImageBackground>

        </Box>


    )


}

const style = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'

    }
})


interface IComp {
    setUser: React.Dispatch<React.SetStateAction<IAccount>>
    user: IAccount
}
const Login = ({ setUser, user }: IComp) => {

    return (
        <VStack space="5" w={'2/3'}>
            <Input
                placeholder="Email"
                InputLeftElement={<Icon as={Fontisto} size={'lg'} ml={'2'} name="email" />}
                onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <Input
                placeholder="Password"
                type="password"
                InputLeftElement={<Icon as={AntDesign} size={'xl'} ml={'2'} name="lock" />}
                onChangeText={(text) => setUser({ ...user, password: text })}
            />

        </VStack>
    )
}


const Register = ({ setUser, user }: IComp) => {

    return (
        <VStack space="5" w={'2/3'}>
            <Input
                placeholder="Full Name"
                InputLeftElement={<Icon as={AntDesign} size={'xl'} ml={'2'} name="user" />}
                onChangeText={(text) => setUser({ ...user, fullName: text })}
            />
            <Input
                placeholder="Username"
                InputLeftElement={<Icon as={AntDesign} size={'xl'} ml={'2'} name="user" />}
                onChangeText={(text) => setUser({ ...user, username: text })}
            />
            <Input
                placeholder="Email"
                InputLeftElement={<Icon as={Fontisto} size={'xl'} ml={'2'} name="email" />}
                onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <Input
                placeholder="Password"
                type="password"
                InputLeftElement={<Icon as={AntDesign} size={'xl'} ml={'2'} name="lock" />}
                onChangeText={(text) => setUser({ ...user, password: text })}
            />

        </VStack>
    )
}

