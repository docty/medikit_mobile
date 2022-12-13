import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type StackParamListBase = {
    Account: undefined
    Login: undefined
    Register: undefined
    Dashboard: undefined
    User: {
        username: string
        uid: string
    }
    Enlarge: {
        uri: string
    }
    Profile: undefined
}


export type BottomTabNavigationParamList = {
    Settings: undefined
    Home: undefined
    Appointment: undefined 
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamListBase>
export type BottomScreenNavigationProp = BottomTabNavigationProp<BottomTabNavigationParamList>

export type UserRouterProp = RouteProp<StackParamListBase, 'User'>
export type EnlargeRouterProp = RouteProp<StackParamListBase, 'Enlarge'>

export interface IGallery {
    username: string;
    uid: string;
    displayImage: string;
    src: ISrc,
}

export interface IGalleryCollection {
    username: string;
    displayImage: string;
    uid: string;
    src: Record<string, ISrc>,
}

export interface ISrc {
    likes: Record<string, IBoolean>;
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

interface IBoolean {
    uid: string;
    status: boolean
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
    followers?: Record<string, IBoolean> | null
    following?: Record<string, IBoolean> | null;
    dateCreated?: string;
}

export type ITag = 'Wedding' | 'Outing' | 'Graduation';


export interface IAccount {
    fullName: string
    username: string
    email: string
    password: string
}



    //  const  jj = useNavigation<HomeScreenNavigationProp>()
  // const rr =  useRoute<DetailsScreenRouterProp>();
