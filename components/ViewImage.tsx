import { useNavigation } from "@react-navigation/native"
import { Center, Image } from "native-base"
import React from "react"
import { Pressable } from "react-native"
import { HomeScreenNavigationProp, IUpload } from "../types"

const ViewImage = ({ uid, uri }: IUpload) => {
    const navigation = useNavigation<HomeScreenNavigationProp>()


    return (
        <Center flexGrow={'1'} flexBasis={'150'} py={'2'}>
            <Pressable onPress={() => navigation.navigate('Enlarge', { uri: uri })}>

                <Image
                    source={{ uri: uri }}
                    alt="Alternate Text"
                    size={'300'}
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                />
            </Pressable>

        </Center>


    )
}

export default ViewImage