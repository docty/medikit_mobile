import { Box, Text, Button, Image, VStack, HStack, Center, Icon, Flex, Input, Pressable } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export const DoctorList = () => {
    const { navigate } = useNavigation<any>();

    return (
        <VStack p="4" flex={'1'} bg={'white'} space={'6'} safeArea>
            <Text  fontSize="2xl" fontWeight={'bold'} textAlign={'center'}>Doctors</Text>
            
            <Input placeholder="Search Doctor" rounded={'xl'} bg={'white'} p={'3'} InputLeftElement={<Icon as={Ionicons} name="search-outline" mx={'2'} />
            } />

            <Pressable onPress={() => navigate('Doctor')}  rounded="lg"  borderWidth={'1'} borderColor={'gray.100'}> 
                <HStack space="3"   p="4" >
                    <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} alt={'Avatar'} />
                    <VStack alignItems={'stretch'} justifyContent={'space-between'}>
                        <Text fontWeight={'bold'} fontSize="sm">Dr. Asiedu Henry</Text>
                        <Text fontSize="xs">Heart Surgeon</Text>
                    </VStack>
                    <VStack ml={'auto'} alignItems={'stretch'} justifyContent={'space-between'}>
                        <Text fontSize="sm" fontWeight={'bold'}>$Free</Text>
                        <HStack >
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mr={'1'} color={'gray.500'} />
                            <Text fontSize="xs">4.0</Text>
                        </HStack>
                    </VStack>
                </HStack>

            </Pressable>

        </VStack>




    )
}