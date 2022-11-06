import { keys, length, lensPath, over, pick, values, view } from 'ramda';
import { gallery } from './galleryData'


export const getLength = () => {

    return length(keys(gallery))
}

export const getRandomNumber = (count: number) => {


    return Math.floor(Math.random() * count);
}


export const getRandomKey = (count: number) => {

    const position = Math.floor(Math.random() * count);

    return keys(gallery)[position]
}


export const getSingleData = (id: string) => {

    const path = lensPath([id, 'src']);

    const data = pick([id], gallery);

    const predicate = (res: any) => {
        const getKeys = keys(res);

        const randomNumber = getRandomNumber(length(getKeys))

        const getKey = getKeys[randomNumber];

        const newData = pick([getKey], res);

        return newData

    }

    const compute = over(path, predicate, data)

    return compute;
}