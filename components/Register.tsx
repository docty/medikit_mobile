import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { VStack, Input, Icon, Box, Text, FormControl, HStack, Checkbox, Button, Center, Select, IconButton } from "native-base"
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
        <Box safeArea bg="white" p="2" flex={1} >
            <IconButton
                variant="ghost"
                icon={<Icon size="md" as={Ionicons} name="chevron-back-outline" color="black" />}
                onPress={() => navigate('Account')}
                w={'12'}
            />


            <Box p="2" flex={1} justifyContent={'space-between'}>
                <Center >
                    <Text fontSize="3xl" fontWeight={'bold'}>Create Account</Text>
                    <Text fontSize="sm">Enter your details to create an account</Text>
                </Center>


                <VStack space="2">
                    <FormControl  >
                        <FormControl.Label>Full name</FormControl.Label>
                        <Input
                            placeholder="Full name"
                            rounded={'full'}
                            value={user.fullName}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="person-outline" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>
                    <FormControl  >
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            placeholder="Email"
                            rounded={'full'}
                            value={user.email}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="mail-outline" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>
                    <FormControl  >
                        <FormControl.Label>Phone Number</FormControl.Label>
                        <Input
                            placeholder="Phone Number"
                            rounded={'full'}
                            value={user.phoneNumber}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="call-outline" />}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                        />

                    </FormControl>
                    <FormControl  >
                        <FormControl.Label>Gender</FormControl.Label>
                        <HStack borderWidth={'1'} alignItems={'center'} borderColor={'gray.300'} p={'1'} w={'full'} rounded="full">
                            <Icon as={Ionicons} size={'lg'} ml={'2'} name="male-female-outline" />
                            <Select
                                placeholder="Select your gender"
                                minWidth="full"
                                defaultValue={user.gender}
                                rounded={'full'}
                                borderWidth={'0'}
                                flex={'1'}
                            >
                                <Select.Item label="Male " value="Male" />
                                <Select.Item label="Female" value="Female" />
                            </Select>
                        </HStack>




                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            placeholder="Password"
                            type="password"
                            value={user.password}
                            rounded={'full'}
                            InputLeftElement={<Icon as={Ionicons} size={'lg'} ml={'2'} name="lock-closed-outline" />}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                        />
                    </FormControl>
                    <FormControl  >
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input
                            placeholder="Confirm Password"
                            rounded={'full'}
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
                            colorScheme="primary"
                            onPress={() => {
                                console.log('hello')
                            }}

                        >
                            Privacy Policy
                        </Button>
                        <Text >and</Text>

                        <Button
                            variant={'link'}
                            colorScheme="primary"
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
                        w={'1/2'}
                        rounded={'full'}
                        colorScheme="success"
                        onPress={() => navigate('Home')}

                    >
                        Create an account
                    </Button>
                </Center>



                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Text fontSize="xs">Already have an account?</Text>
                    <Button
                        variant={'link'}
                        colorScheme="primary"
                        onPress={() => {
                            navigate('Login')
                        }}

                    >
                        Login
                    </Button>


                </HStack>

            </Box>

        </Box>
    )
}

interface IRegister {
    fullName: string
    phoneNumber: string
    gender: string
    email: string
    password: string
}

