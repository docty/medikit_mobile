import { Box, Center, Image, Text, Input, FormControl, Button, VStack, Select } from "native-base"

export const Profile = () => {

    return (
        <Box bg="white" p="4" safeArea flex={'1'} justifyContent={'space-between'}>
            <Center>
                <Image source={require('../assets/2.jpg')} size={24} mb={'2'} rounded={'full'} alt={'Avatar'} />
                <Button
                    variant={'outline'}
                    colorScheme="primary"
                    onPress={() => {
                        console.log('hello')
                    }}

                >
                    Change Picture
                </Button>

            </Center>

            <VStack space="3">
                <FormControl>
                    <FormControl.Label>Full Name</FormControl.Label>
                    <Input bg={'white'} p={'3'} placeholder="Full Name" rounded={'full'} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input bg={'white'} p={'3'} placeholder="Email" rounded={'full'} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Phone Number</FormControl.Label>
                    <Input bg={'white'} p={'3'} placeholder="Phone Number" rounded={'full'} />
                </FormControl>
 
                <FormControl>
                    <FormControl.Label>Gender</FormControl.Label>
                    <Select
                        placeholder="Select your gender"
                        minWidth="full"
                        p={'3'}
                        bg={'white'}
                        rounded={'full'}
                        borderWidth={'1'}
                        flex={'1'}
                    >
                        <Select.Item label="Male " value="Male" />
                        <Select.Item label="Female" value="Female" />
                    </Select>
                </FormControl>

            </VStack>

            <Button
                colorScheme="primary"
                w={'3/4'}
                mx={'auto'}
                _text={{ fontWeight: 'bold' }}
                onPress={() => {
                    console.log('hello')
                }}
                rounded={'full'}

            >
                Save
            </Button>

        </Box >


    )
}