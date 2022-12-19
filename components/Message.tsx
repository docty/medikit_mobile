import { Text, Image, Input, IconButton, Icon, Button, VStack, ScrollView, HStack, Box, Center } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import {useState} from 'react'

export const Message = () => {
	const [message, setMessage] = useState('');
    return (
        <>
            <ScrollView flex={'1'} p={'4'} bg={'white'}>
                <Box w={'3/4'} my={'4'} ml={'auto'} bg="darkBlue.700" p="4" rounded="lg">
                    <Text  fontSize="md" color={'white'}>Hello Dr. I am very happy chatting with you. My name is developer</Text>
                    <HStack  space="1" mt={'2'} alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline" color={'green.400'} />
                     </HStack>
                    
                </Box>
                <Box w={'3/4'} my={'4'} bg="lightBlue.600" p="4" rounded="lg">
                    <Text  fontSize="md" color={'white'}>I am also glad hearing from you.</Text>
                    <HStack  space="1" mt={'2'} alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline" color={'green.400'} />
                     </HStack>
                    
                </Box>
                <Box w={'3/4'} my={'4'}  bg="lightBlue.600" p="4" rounded="lg">
                    <Text  fontSize="md" color={'white'}>Please, how may I help you?</Text>
                    <HStack  space="1" mt={'2'} alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline" color={'green.400'} />
                     </HStack>
                    
                </Box>
                <Box w={'3/4'} my={'4'} ml={'auto'} bg="darkBlue.700" p="4" rounded="lg">
                    <Text  fontSize="md" color={'white'}>Thank you Dr. I am just checking up on you.</Text>
                    <HStack  space="1" mt={'2'} alignItems="center" justifyContent={'flex-end'}>
                        <Text color={'white'}  fontSize="xs">5:30pm</Text>
                        <Icon as={Ionicons} name="checkmark-done-outline" color={'white'} />
                     </HStack>
                    
                </Box>
                 
            </ScrollView>
            <HStack space="3" alignItems="center" p={'3'} bg={'white'}>
                <IconButton
                    variant="ghost"
                    icon={<Icon size="lg" as={Ionicons} name="scan-outline" color="black" />}
                    onPress={() => {
                        console.log('hello')
                    }}
                />
                <Input onChangeText={(e) => setMessage(e)} placeholder="Type Message" flex={'1'} rounded={'md'} p={'3'} bg={'white'}  />
                {
			message ?
			<IconButton
                    variant="ghost"
                    icon={<Icon size="lg" as={Ionicons} name="send-outline" color="black" />}
                    onPress={() => {
                        console.log('hello')
                    }}
                />
:
<IconButton
                    variant="ghost"
                    icon={<Icon size="lg" as={Ionicons} name="mic-outline" color="black" />}
                    onPress={() => {
                        console.log('hello')
                    }}
                />
		}
		
            </HStack>

        </>
    )
}