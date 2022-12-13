import { Text, Image, Input, IconButton, Icon, Button, VStack, ScrollView, HStack, Box, Center } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export const Message = () => {

    return (
        <>
            <ScrollView flex={'1'}>
                ScrollView
            </ScrollView>
            <HStack space="3" alignItems="center">
                <IconButton
                    variant="ghost"
                    icon={<Icon size="md" as={Ionicons} name="search1" color="black" />}
                    onPress={() => {
                        console.log('hello')
                    }}
                />
                <Input placeholder="Type Message" flex={'1'} rounded={'full'} bg={'white'} InputRightElement={<Icon as={Ionicons} name="home" />
                } />
                <IconButton
                    variant="ghost"
                    icon={<Icon size="md" as={Ionicons} name="search1" color="black" />}
                    onPress={() => {
                        console.log('hello')
                    }}
                />
            </HStack>

        </>
    )
}