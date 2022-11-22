import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { DataSnapshot, get, onValue, push, remove, set, update } from "firebase/database"
import { getReference } from "./firebase-config"

import { keys, length, lensPath, omit, over, pick, prop, props, reject, values, view } from 'ramda';
import { IAccount, IGalleryCollection, ITag, IUser, IUserData } from '../types';
import { getId } from '@decimalvalues/faker'



export const authenticateUser = async (data: IAccount) => {

    const { user } = await signInWithEmailAndPassword(getAuth(), data.email, data.password)

    const response = await getUser(user.uid);

    return response

}

export const registerUser = async (data: IAccount) => {
    const { user } = await createUserWithEmailAndPassword(getAuth(), data.email, data.password);

    try {
        await addUser({
            ...omit(['password'], data),
            uid: user.uid,
            displayImage: "https://outfittrends.b-cdn.net/wp-content/uploads/2021/03/D5_PADGWAAAdSmO-400x500.jpeg",
            followers: null,
            following: null
        })
        return Promise.resolve({ uid: user.uid })
    } catch {
        return Promise.reject({ message: 'Error occurred' })
    }

}



export const addUser = (user: IUserData) => {

    const path = getReference(`user/${user.uid}`);
    return set(path, { ...user, dateCreated: new Date().toLocaleString('en-GB') })
}



export const getUser = async (uid: string): Promise<IUser> => {
    const path = getReference(`user/${uid}`);
    const result = await get(path);
    return result.val()
}


export const getRandomNumber = (count: number) => {

    return Math.floor(Math.random() * count);
}



export const getAnyKey = async () => {

    const paths = getReference(`gallery/`);
    const response = await get(paths);
    const count = length(keys(response.val()));
    const position = Math.floor(Math.random() * count);

    return keys(response.val())[position]
}



export const getIndividualData = async (id: string) => {
    const ref = getReference(`gallery/${id}`);
    const response = await get(ref);
    const newSet = response.val() as unknown
    return newSet as IGalleryCollection;
}


export const getIndividualUser = async (id: string) => {
    const ref = getReference(`gallery/${id}`);
    const response = await get(ref);
    const newSet = response.val() as unknown
    return newSet as IUserData;
}



export const getFetch = async (id: string) => {



    const path = lensPath(['src']);

    const predicate = (res: any) => {
        const getKeys = keys(res);


        const randomNumber = getRandomNumber(length(getKeys))

        const getKey = getKeys[randomNumber];

        const newData = pick([getKey], res);

        return newData

    }

    const ref = getReference(`gallery/${id}`);
    const response = await get(ref);

    const compute = over(path, predicate, response.val())

    return compute;

}




///////////////////////// Yet to Test /////////////////////////////////////

export const updateUser = (id: string, data: any) => {
    const path = getReference(`user/${id}`);

    return update(path, data);

}

export const deleteUser = (id: string) => {
    const path = getReference(`user/${id}`);


    return remove(path);

}



const url = 'http://192.168.12.140:3000/'

 
export const setLikeAction = async (uid: string, srcUid: string) => {
    const host = url + 'faker/gallery.json/';

    const likeUid = getId();

    const newData = {
        "uid": likeUid,
        "status": true
    };

    try {
        const response = null;//await set(`${host}${uid}/src/${srcUid}/likes/${likeUid}`, newData)
        return Promise.resolve(response)
    } catch {
        return Promise.reject({ message: 'Error occurred' })
    }

}

export const setFollowUser = async (uid: string) => {

    const host = url + 'faker/user.json/';
    console.log(uid);

    const followersUid = getId();

    const newData = {
        "uid": followersUid,
        "status": true
    };

    try {
        const response = null;// await set(`${host}${uid}/followers/${followersUid}`, newData)
        return Promise.resolve(response)
    } catch {
        return Promise.reject({ message: 'Error occurred' })
    }
}


export const fetchByTag = (tag: string) => {

    return ['https://outfittrends.b-cdn.net/wp-content/uploads/2021/03/D5_PADGWAAAdSmO-400x500.jpeg'];
}


