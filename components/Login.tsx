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
        <Box safeArea bg="white" p="2" flex={1} >
            <IconButton
                variant="ghost"
                icon={<Icon size="md" as={Ionicons} name="chevron-back-outline" color="black" />}
                onPress={()=> navigate('Account')}
                w={'12'}
            />
            
            
            <Box  p="2" flex={1} justifyContent={'space-between'}>
                <Center >
                    <Text fontSize="3xl" fontWeight={'bold'}>Hello, Welcome Back</Text>
                    <Text fontSize="sm">Please login into your account</Text>
                </Center>


                <VStack space="5">
                    <FormControl  >
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            placeholder="Email"
                            rounded={'full'}
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
                            rounded={'full'}
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
                            colorScheme="primary"
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
                        w={'1/2'}
                        rounded={'full'}
                        colorScheme="success"
                        onPress={() => navigate('Home')}

                    >
                        Login
                    </Button>
                </Center>



                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Text fontSize="xs">Are you a new user?</Text>

                    <Button
                        variant={'link'}
                        colorScheme="primary"
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

