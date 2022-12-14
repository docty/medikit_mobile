import { Text, Image, Input, IconButton, Icon, Button, VStack, ScrollView, HStack, Box, Center } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export const Message = () => {

    return (
        <>
            <ScrollView flex={'1'} p={'4'} bg={'white'}>
                <Box w={'3/4'} my={'4'} ml={'auto'} bg="primary.400" p="4" rounded="lg">
                    <Text  fontSize="sm" color={'white'}>Hello Dr. I am very happy chatting with you. My name is developer</Text>
                    <HStack  space="3" alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline"  />
                     </HStack>
                    
                </Box>
                <Box w={'3/4'} my={'4'} bg="success.400" p="4" rounded="lg">
                    <Text  fontSize="sm" color={'white'}>I am also glad hearing from you.</Text>
                    <HStack  space="3" alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline"  />
                     </HStack>
                    
                </Box>
                <Box w={'3/4'} my={'4'}  bg="success.400" p="4" rounded="lg">
                    <Text  fontSize="sm" color={'white'}>Please, how may I help you?</Text>
                    <HStack  space="3" alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline"  />
                     </HStack>
                    
                </Box>
                <Box w={'3/4'} my={'4'} ml={'auto'} bg="primary.400" p="4" rounded="lg">
                    <Text  fontSize="sm" color={'white'}>Thank you Dr. I am just checking up on you.</Text>
                    <HStack  space="3" alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline"  />
                     </HStack>
                    
                </Box>
                 
            </ScrollView>
            <HStack space="3" alignItems="center" p={'3'} bg={'white'}>
                <IconButton
                    variant="ghost"
                    icon={<Icon size="md" as={Ionicons} name="scan-outline" color="black" />}
                    onPress={() => {
                        console.log('hello')
                    }}
                />
                <Input placeholder="Type Message" flex={'1'} rounded={'full'} p={'3'} bg={'white'} InputRightElement={<Icon as={Ionicons} name="send-outline" mr={'4'} />
                } />
                <IconButton
                    variant="ghost"
                    icon={<Icon size="md" as={Ionicons} name="mic-outline" color="black" />}
                    onPress={() => {
                        console.log('hello')
                    }}
                />
            </HStack>

        </>
    )
}