import { Fontisto, AntDesign, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { VStack, Input, Icon, Box, Text, FormControl, HStack, Checkbox, Button, Center, IconButton } from "native-base"
import { useState } from "react"

export const Login = () => {
    const { navigate } = useNavigation<any>();
    const [user, setUser] = useState<ILogin>({
        email: 'developer@medikit.com',
        password: '123456789'
    } as ILogin)

    return (
        <Box bg="white"  flex={1} >
            <Center bg={'pink.700'} mb={'12'} pb={'8'} pt={'3'} roundedBottom={'3xl'} >
                <Text fontSize="3xl" color={'white'} fontWeight={'bold'}>Hello, Welcome Back</Text>
                <Text fontSize="sm" color={'white'}>Please login into your account</Text>
            </Center>

            <Box p="6" flex={1} justifyContent={'space-between'}>
                <VStack space="5">
                    <FormControl  >
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            placeholder="Email"
                            rounded={'xl'}
                            p={'3'}
                            value={user.email}
                            InputLeftElement={<Icon as={Fontisto} size={'lg'} ml={'2'} name="email" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            placeholder="Password"
                            type="password"
                            value={user.password}
                            rounded={'xl'}
                            p={'3'}
                            InputLeftElement={<Icon as={AntDesign} size={'lg'} ml={'2'} name="lock" />}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                        />
                    </FormControl>
                    <HStack space="5" justifyContent={'space-between'} alignItems={'center'}>
                        <Checkbox value="checkbox" _text={{ fontSize: 'sm' }}>
                            Keep me logged in
                        </Checkbox>
                        <Button
                            variant={'link'}
                            colorScheme="pink"
                            onPress={() => {
                                console.log('hello')
                            }}

                        >
                            Forgot Password?
                        </Button>


                    </HStack>

                </VStack>

                <Center>
                    <Button
                        w={'3/4'}
                        rounded={'xl'}
                        colorScheme={'amber'}
                        onPress={() => navigate('Dashboard')}
                        p={'4'}
                        _text={{ fontWeight: 'bold' }}

                    >
                        Login
                    </Button>
                </Center>



                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Text fontSize="sm">Are you a new user?</Text>

                    <Button
                        variant={'link'}
                        ml={'-2'}
                        colorScheme="pink"
                        onPress={() => {
                            navigate('Register')
                        }}

                    >
                        Create an account
                    </Button>


                </HStack>
            </Box>



        </Box>


    )
}

interface ILogin {
    email: string
    password: string
}

