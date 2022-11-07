import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type StackParamListBase = {
    Home: undefined
    User: {
        username: string
        uid: string
    }
    Enlarge: {
        uri: string
    }
}


export type BottomTabNavigationParamList = {
    Search: undefined
    Gallery: undefined
    Profile: undefined
    Account: undefined
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamListBase>
export type BottomScreenNavigationProp = BottomTabNavigationProp<BottomTabNavigationParamList>

export type UserRouterProp = RouteProp<StackParamListBase, 'User'>
export type EnlargeRouterProp = RouteProp<StackParamListBase, 'Enlarge'>

export interface IGallery {
    username: string;
    uid: string;
    src: ISrc,
}

export interface IGalleryCollection {
    username: string;
    uid: string;
    src: Record<string, ISrc>,
}

export interface ISrc {
    likes: Record<string, boolean>;
    uid: string;
    comments: Record<string, IComments>;
    upload: Record<string, IUpload>;
    tag: ITag
}

interface IComments {
    uid: string;
    username: string;
    message: string
}
export interface IUpload {
    uri: string
    uid: string
}

export type IUser = Record<string, IUserData>;

export interface IUserData {
    uid: string
    email: string
    username: string
    fullName: string;
    displayImage: string
    followers: Record<string, boolean>
    following: Record<string, boolean>
}

export type ITag = 'Wedding' | 'Outing';




    //  const  jj = useNavigation<HomeScreenNavigationProp>()
  // const rr =  useRoute<DetailsScreenRouterProp>();
