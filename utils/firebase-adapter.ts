import { keys, length, lensPath, over, pick, prop, props, values, view } from 'ramda';
import { IAccount, IGalleryCollection, ITag, IUser, IUserData } from '../types';
import { get } from '@decimalvalues/faker'

export const getLength = async () => {

    const response = await get('http://192.168.174.253:19000/assets/faker/gallery.json');

    return length(keys(response));
}

export const getRandomNumber = (count: number) => {


    return Math.floor(Math.random() * count);
}


export const getRandomKey = async (count: number) => {

    const position = Math.floor(Math.random() * count);
    const response = await get('http://192.168.174.253:19000/assets/faker/gallery.json');

    return keys(response)[position]
}


// export const getSingleData = (id: string): IGalleryCollection => {



//     const path = lensPath([id, 'src']);

//     const data = pick([id], gallery);

//     const predicate = (res: any) => {
//         const getKeys = keys(res);

//         const randomNumber = getRandomNumber(length(getKeys))

//         const getKey = getKeys[randomNumber];

//         const newData = pick([getKey], res);

//         return newData

//     }

//     const compute = over(path, predicate, data)

//     return prop(id, compute);
// }

export const getIndividualData = async (id: string) => {
    const response = await get<IGalleryCollection>('http://192.168.174.253:19000/assets/faker/gallery.json/' + id);

    return response;
}

/**
 * Fetches a user with a given id
 * @param id user id
 * @returns 
 */
export const getIndividualUser = async (id: string) => {
    const response = await get<IUserData>('http://192.168.174.253:19000/assets/faker/user.json/' + id);
      
    return response;
}

export const fetchByTag = (tag: ITag) => {
    // const data = values(gallery)

    // const response = data.map(item => {
    //     return values(item.src).filter(found => found.tag === tag)
    // })

    // return response.flat()
}



export const registerUser = (data: IAccount) => {


    return Promise.resolve({
        uid: '450943jklglmkwlerlt5l'
    })
}

export const setLikeAction = (uid: string) => {


    return Promise.resolve(true)
}

export const setFollowUser = (uid: string) => {


    return Promise.resolve(true)
}



export const getFetch = async (id: string) => {


    const path = lensPath(['src']);


    const response = await get<IGalleryCollection>('http://192.168.174.253:19000/assets/faker/gallery.json/' + id)



    const predicate = (res: any) => {
        const getKeys = keys(res);


        const randomNumber = getRandomNumber(length(getKeys))

        const getKey = getKeys[randomNumber];

        const newData = pick([getKey], res);

        return newData

    }

    const compute = over(path, predicate, response) 
    
    return compute

}