import { AntDesign, Entypo, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Flex, HStack, Avatar, Text, Center, Button, Image, ScrollView, VStack, Divider, Pressable, Icon, Spacer, Input, IconButton } from "native-base";
import { values } from "ramda";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useMutation, useQueries } from "react-query";
import { BottomScreenNavigationProp, HomeScreenNavigationProp, IUpload } from "../types";
import { getIndividualData, getIndividualUser } from "../utils/firebase-adapter";
import { ITEM_WIDTH, SLIDER_WIDTH } from "./Search";
import ViewImage from "./ViewImage";


interface IAccount {
    fullName: string
    username: string
    email: string
    password: string
}

type IActive = 'register' | 'login'

export const Account = () => {

    const navigation = useNavigation<BottomScreenNavigationProp>();

    const [active, setActive] = useState<boolean>(false);
    const [section, setSection] = useState<IActive>('register');
    const [user, setUser] = useState<IAccount>({} as IAccount)

    const sendData = (response: any) => {

        return Promise.resolve('hjhj');

    }

    const { mutate, data, isSuccess } = useMutation({
        mutationKey: ['sendData'],
        mutationFn: sendData
    })

    useEffect(() => {
        if (isSuccess) {
            navigation.navigate('Profile')
        }

    }, [data]);

    const onbtnClick = (id: IActive) => {
        setActive(true)
        setSection(id)

        if (active) {
            setUser({} as IAccount)
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

