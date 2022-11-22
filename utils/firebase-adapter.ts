import { keys, length, lensPath, omit, over, pick, prop, props, reject, values, view } from 'ramda';
import { IAccount, IGalleryCollection, ITag, IUser, IUserData } from '../types';
import { get, getId, set } from '@decimalvalues/faker'

const url = 'http://192.168.12.140:3000/'

export const getRandomNumber = (count: number) => {

    return Math.floor(Math.random() * count);
}


export const getAnyKey = async () => {

    const host = url+'faker/gallery.json/'
    const response = await get(host);
    const count = length(keys(response));
    const position = Math.floor(Math.random() * count);

    return keys(response)[position]
}



export const getIndividualData = async (id: string) => {
    const host = url+'faker/gallery.json/';
    const response = await get<IGalleryCollection>(`${host}${id}`);
    const newSet = prop(id, response) as unknown
    return newSet as IGalleryCollection;
}


export const getIndividualUser = async (id: string) => {
    const host = url+'faker/user.json/';
    const response = await get<IUserData>(`${host}${id}`);
    const newSet = prop(id, response) as unknown
    return newSet as IUserData;
}


export const registerUser = async (data: IAccount) => {
    const host = url+'faker/user.json/';

    const uid = getId();

    const newData = {
        ...omit(['password'], data),
        uid,
        displayImage: "https://outfittrends.b-cdn.net/wp-content/uploads/2021/03/D5_PADGWAAAdSmO-400x500.jpeg",
        followers: {},
        following: {}
    }

    try {
        await set(`${host}${uid}`, newData)
        return Promise.resolve({ uid })
    } catch {
        return Promise.reject({ message: 'Error occurred' })
    }

}

export const setLikeAction = async (uid: string, srcUid: string) => {
    const host = url+'faker/gallery.json/';

    const likeUid = getId();

    const newData = {
        "uid": likeUid,
        "status": true
    };

    try {
       const response =  await set(`${host}${uid}/src/${srcUid}/likes/${likeUid}`, newData)
        return Promise.resolve(response)
    } catch {
        return Promise.reject({ message: 'Error occurred' })
    }
    
}

export const setFollowUser =  async (uid: string) => {

    const host = url+'faker/user.json/';
    console.log(uid);
    
    const followersUid = getId();

    const newData = {
        "uid": followersUid,
        "status": true
    };

    try {
       const response =  await set(`${host}${uid}/followers/${followersUid}`, newData)
        return Promise.resolve(response)
    } catch {
        return Promise.reject({ message: 'Error occurred' })
    }
}


export const fetchByTag = (tag: string) => {

    return ['https://outfittrends.b-cdn.net/wp-content/uploads/2021/03/D5_PADGWAAAdSmO-400x500.jpeg'];
}


export const getFetch = async (id: string) => {

    const path = lensPath([id, 'src']);


    const host = url+'faker/gallery.json/'

    const predicate = (res: any) => {
        const getKeys = keys(res);

        const randomNumber = getRandomNumber(length(getKeys))

        const getKey = getKeys[randomNumber];

        const newData = pick([getKey], res);

        return newData

    }

    const response = await get<IGalleryCollection>(`${host}${id}`)
    const compute = over(path, predicate, response)

    const newSet = prop(id, compute)

    return newSet

}