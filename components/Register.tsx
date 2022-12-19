import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { VStack, Input, Icon, Box, Text, FormControl, HStack, Checkbox, Button, Center, Select, IconButton, ScrollView } from "native-base"
import { useState } from "react"

export const Register = () => {
    const { navigate } = useNavigation<any>();
    const [user, setUser] = useState<IRegister>({
        fullName: 'Developer Team',
        email: 'developer@medikit.com',
        password: '123456789',
        phoneNumber: '+2330000000',
        gender: 'Male'
    } as IRegister)

    return (
        <>
            <Center bg={'pink.700'} pb={'8'} roundedBottom={'2xl'} >
                {/* <Text fontSize="2xl" color={'white'} fontWeight={'bold'}>Create Account</Text> */}
                <Text fontSize="sm" color={'white'}>Enter your details to create an account</Text>
            </Center>

            <ScrollView p="6" flex={1} bg="white">
                <VStack space="2">
                    <FormControl  >
                        <FormControl.Label>Full name</FormControl.Label>
                        <Input
                            placeholder="Full name"
                            rounded={'lg'}
                            p={'3'}
                            value={user.fullName}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="person-outline" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>
                    <FormControl  >
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            placeholder="Email"
                            rounded={'lg'}
                            p={'3'}
                            value={user.email}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="mail-outline" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>
                    <FormControl  >
                        <FormControl.Label>Phone Number</FormControl.Label>
                        <Input
                            placeholder="Phone Number"
                            rounded={'lg'}
                            p={'3'}
                            value={user.phoneNumber}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="call-outline" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            placeholder="Password"
                            type="password"
                            value={user.password}
                            rounded={'lg'}
                            p={'3'}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="lock-closed-outline" />}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                        />
                    </FormControl>
                    <FormControl  >
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input
                            placeholder="Confirm Password"
                            rounded={'lg'}
                            p={'3'}
                            type="password"
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="lock-closed-outline" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>
                    <HStack alignItems={'center'}>
                        <Checkbox value="checkbox" _text={{ fontSize: 'sm' }}>
                            I agree to the
                        </Checkbox>
                        <Button
                            variant={'link'}
                            colorScheme="pink"
                            mx={'-2'}
                            onPress={() => {
                                console.log('hello')
                            }}

                        >
                            Privacy Policy
                        </Button>
                        <Text >and</Text>

                        <Button
                            variant={'link'}
                            colorScheme="pink"
                            ml={'-2'}
                            onPress={() => {
                                console.log('hello')
                            }}

                        >
                            Terms
                        </Button>

                    </HStack>

                </VStack>

                <Center>
                    <Button
                        w={'3/4'}
                        my={'6'}
                        rounded={'xl'}
                        colorScheme="amber"
                        onPress={() => navigate('Dashboard')}
                        _text={{ fontWeight: 'bold' }}
                        p={'4'}
                    >
                        Create an account
                    </Button>
                </Center>



                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Text fontSize="sm">Already have an account?</Text>
                    <Button
                        variant={'link'}
                        ml={'-2'}
                        colorScheme="pink"
                        onPress={() => {
                            navigate('Login')
                        }}

                    >
                        Login
                    </Button>


                </HStack>

            </ScrollView>

        </>
    )
}

interface IRegister {
    fullName: string
    phoneNumber: string
    gender: string
    email: string
    password: string
}

