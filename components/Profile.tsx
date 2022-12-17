import { Box, Center, Image, Text, Input, FormControl, Button, VStack, Select } from "native-base"

export const Profile = () => {

    return (
        <Box bg="white" p="4" safeArea flex={'1'} justifyContent={'space-between'}>
            <Center>
                <Image source={require('../assets/image6.png')} size={24} mb={'2'} rounded={'full'} alt={'Avatar'} />
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
                    <Input bg={'white'} p={'3'} placeholder="Full Name" rounded={'lg'} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input bg={'white'} p={'3'} placeholder="Email" rounded={'lg'} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Phone Number</FormControl.Label>
                    <Input bg={'white'} p={'3'} placeholder="Phone Number" rounded={'lg'} />
                </FormControl>
 
                 

            </VStack>

            <Button
                colorScheme="amber"
                w={'3/4'}
p={'3'}
                mx={'auto'}
                _text={{ fontWeight: 'bold' }}
                onPress={() => {
                    console.log('hello')
                }}
                rounded={'lg'}

            >
                Save
            </Button>

        </Box >


    )
}