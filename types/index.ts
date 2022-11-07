import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type StackParamListBase = {
    Home: undefined
    User: {
        username: string
        uid: string
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

export type IUser= Record<string, IUserData>;

export interface IUserData {
    uid: string
    email: string
    username: string
    fullName: string;
    displayImage: string
    followers: Record<string, boolean>
    following: Record<string, boolean>
}

export type ITag  = 'Wedding' | 'Outing';


// export type BottomTabNavigationParamList = {
//   Main: StackParamListBase
// }



    //  const  jj = useNavigation<HomeScreenNavigationProp>()
  // const rr =  useRoute<DetailsScreenRouterProp>();
