const { faker, getUsername, repeat, getId, getImage, getEmail, getFromList, getText, getName } = require('@decimalvalues/faker')

/** @type {import('@decimalvalues/faker').FakerConfig} */
const gallery = {
    outDir: '/assets/faker',
    filename: 'gallery.json',
    structure: faker(repeat({
        username: getUsername,
        displayImage: getImage,
        uid: getId,
        src: repeat({
            uid: getId,
            tag: getFromList,
            likes: repeat({
                uid: getId,
                status: true
            }, { count: 2, key: 'uid' }),
            comments: repeat({
                uid: getId,
                username: getUsername,
                message: getText
            }, { count: 2, key: 'uid' }),
            upload: repeat({
                uid: getId,
                uri: getImage
            }, { count: 3, key: 'uid' })
        }, { count: 2, key: 'uid' }, { tag: ['Outing', 'Wedding', 'Graduation'] })
    }, { count: 3, key: 'uid' }))
}



const user = {
    outDir: '/assets/faker',
    filename: 'user.json',
    structure: faker(repeat({
        uid: getId,
        email: getEmail,
        displayImage: getImage,
        username: getUsername,
        fullName: getName,
        followers: repeat({
            uid: getId,
            status: true,
        }, { count: 3, key: 'uid' }),
        following: repeat({
            uid: getId,
            status: true,
        }, { count: 2, key: 'uid' }),
    }, { count: 3, key: 'uid' }))
}



module.exports = [gallery, user];