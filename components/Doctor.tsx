import { Box, Text, Button, Image, VStack, HStack, Center, Icon, Flex } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export const Doctor = () => {
    const { navigate } = useNavigation<any>();

    return (
        <Box p="4" flex={'1'} justifyContent={'space-between'} bg={'white'}>
            <VStack p="4" bg={'blueGray.700'} rounded="md" shadow={'4'} space={'6'}>
                <HStack space={'6'}>
                    <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} alt={'Avatar'} />
                    <VStack space="1">
                        <Text fontSize="sm" fontWeight={'bold'} color={'white'}>Dr. Asiedu Henry</Text>
                        <Text fontSize="xs" color={'white'}>Therapist</Text>
                    </VStack>
                </HStack>

                <HStack alignItems="center" justifyContent={'space-between'}>
                    <Flex direction="row" alignItems="center">
                        <Icon as={Ionicons} mr={'2'} name="home-outline" />
                        <Text fontSize="xs" color={'white'}>$120</Text>
                    </Flex>
                    <Flex direction="row" alignItems="center">
                        <Icon as={Ionicons} mr={'2'} name="search-outline" />
                        <Text fontSize="xs" color={'white'}>1.5M</Text>
                    </Flex>
                    <Flex direction="row" alignItems="center">
                        <Icon as={Ionicons} mr={'2'} name="home" />
                        <Text fontSize="xs" color={'white'}>30 Reviews</Text>
                    </Flex>
                </HStack>
                <Button.Group w={'full'}>
                    <Button colorScheme="teal" flex={'1'}>Call</Button>
                    <Button colorScheme="primary" flex={'1'} onPress={() => navigate('Message')}>Message</Button>
                </Button.Group>



            </VStack>

            <Box>
                <Text fontSize="sm" fontWeight={'bold'}>About</Text>
                <Text fontSize="xs" >Dr. Asiedu Henry has extensive experience in internal medicine and hospital settlement... <Button
                    variant={'link'}
                    colorScheme="primary"
                    onPress={() => {
                        console.log('hello')
                    }}

                >
                    Read more
                </Button>
                </Text>

            </Box>
            <Box>
                <Text fontSize="sm" fontWeight={'bold'}>Location</Text>
                <HStack space="3" alignItems="center" shadow={'4'} p="4" rounded="md">
                    <Icon as={Ionicons} name="location-outline" />
                    <VStack space="3">
                        <Text fontWeight={'bold'} fontSize="sm">Helix Hospital</Text>
                        <Text fontSize="xs">Suame, Ghana</Text>
                    </VStack>
                </HStack>

            </Box>

            <Box>
                <HStack space="3" alignItems="center" justifyContent={'space-between'}>
                    <Text fontSize="sm" fontWeight={'bold'}>Reviews</Text>
                    <Button
                        variant={'ghost'}
                        colorScheme="primary"
                        onPress={() => null}
                        _text={{ fontWeight: 'semibold' }}
                    >
                        See all
                    </Button>
                </HStack>

                <VStack space="3" shadow={'4'} p="4" rounded="md">
                    <HStack space="3">
                        <Image source={require('../assets/2.jpg')} size={12} rounded={'full'} alt={'Avatar'} />
                        <VStack>
                            <Text fontWeight={'bold'} fontSize="sm">Ella Asamoah</Text>
                            <Text fontSize="xs">1 week ago</Text>
                        </VStack>
                        <HStack ml={'auto'}>
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mx={'0'} color={'yellow.500'} />
                            <Icon as={Ionicons} name="star-sharp" mr={'1'} color={'gray.500'} />
                            <Text fontSize="xs">4.0</Text>
                        </HStack>
                    </HStack>
                    <Text fontSize="xs">Many thanks to Dr. Asiedu Henry, he is the best doctor ever</Text>

                </VStack>

            </Box>

            <Button
                colorScheme="primary"
                w={'3/4'}
                mx={'auto'}
                rounded={'full'}
                onPress={() => {
                    console.log('hello')
                }}
            >
                Book Appointment
            </Button>

        </Box>

    )
}