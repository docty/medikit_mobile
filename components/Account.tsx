import { AntDesign, Fontisto } from "@expo/vector-icons";
import { Center, Button, VStack, Icon, Input } from "native-base";
import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { IAccount } from "../types";
import { registerUser } from "../utils/firebase-adapter";
import { setItemAsync } from 'expo-secure-store'
import { useSession } from "./Session";



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
        <Center height={'full'} bg={'white'} >
            {
                active && panel[section]

            }

            <Button
                colorScheme="primary"
                mt={'10'}
                minW={'2/3'}
                variant={'solid'}
                onPress={() => onbtnClick(`${section === 'register' ? 'register' : 'login'}`)}
            >
                {section === 'register' ? 'Create Afrik Account' : 'Login'}
            </Button>
            <Button
                colorScheme="blue"
                variant={'link'}
                mt={'1'}
                onPress={() => onbtnClick(`${section === 'register' ? 'login' : 'register'}`)}
            >
                {section === 'register' ? 'Already have an account?  Click here to login' : 'Are you new to afrik?   Click here to create account'}
            </Button>




        </Center>

    )


}


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

