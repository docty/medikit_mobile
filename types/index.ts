import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type StackParamListBase = {
    Home: undefined
    User: {
        name: string
        uuid: string
    }
    Enlarge: {
        user: string
        src: string
        upload: string
    }
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamListBase>

export type UserRouterProp = RouteProp<StackParamListBase, 'User'>
export type EnlargeRouterProp = RouteProp<StackParamListBase, 'Enlarge'>

export interface IGallery {
    name: string;
    uuid: string;
    src: ISrc,
}

export interface IGalleryCollection {
    name: string;
    uuid: string;
    src: Record<string, ISrc>,
}

export interface ISrc {
    likes: string;
    uuid: string;
    comments: string;
    upload: Record<string, IUpload>;
}

interface IUpload {
    uri: string
    uuid: string
}

export type IUser= Record<string, IUserData>;

export interface IUserData {
    uuid: string
    email: string
    name: string
    displayImage: string
    followers: string
    following: string
}



// export type BottomTabNavigationParamList = {
//   Main: StackParamListBase
// }



    //  const  jj = useNavigation<HomeScreenNavigationProp>()
  // const rr =  useRoute<DetailsScreenRouterProp>();
