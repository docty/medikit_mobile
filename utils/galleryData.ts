import { IGalleryCollection, IUser } from "../types";

export const gallery: Record<string, IGalleryCollection> = {
    "g2o748vgi9qztfs5z5nmz": {
        "username": "tampores",
        "displayImage": "https://d17a17kld06uk8.cloudfront.net/products/43VMDHH/CH3TJT57-default.jpg",
        "uid": "g2o748vgi9qztfs5z5nmz",
        "src": {
            "dyhrmbxunc6rw6vlwvns6h": {
                "uid": "dyhrmbxunc6rw6vlwvns6h",
                "tag": "Outing",
                "likes": {
                    "va69lmpz9wqosc5eqncjij": {
                        "uid": "va69lmpz9wqosc5eqncjij",
                        "status": true
                    }
                },
                "comments": {
                    "yjs4rs5vno7srssutdaqm": {
                        "uid": "yjs4rs5vno7srssutdaqm",
                        "username": "nini",
                        "message": "We are coming now"
                    }
                },
                "upload": {
                    "v3b4llkyotfqh5un1u42hp": {
                        "uid": "v3b4llkyotfqh5un1u42hp",
                        "uri": "https://outfittrends.b-cdn.net/wp-content/uploads/2021/03/D5_PADGWAAAdSmO-400x500.jpeg"
                    },
                    "9u2lyc36i52r23gnli2cz": {
                        "uid": "9u2lyc36i52r23gnli2cz",
                        "uri": "https://d17a17kld06uk8.cloudfront.net/products/43VMDHH/CH3TJT57-default.jpg"
                    },
                    "lg06fq28i0k970al0eiwuv": {
                        "uid": "lg06fq28i0k970al0eiwuv",
                        "uri": "https://theglossychic.com/wp-content/uploads/2019/11/20191110_001641.jpg"
                    }
                }
            }
        }
    }

}

export const user: IUser = {
    '450943jklglmkwlerlt5l': {
        uid: '450943jklglmkwlerlt5l',
        email: 'decimalvalues@gmail.com',
        displayImage: 'https://netstorage-tuko.akamaized.net/images/a91eb71fd624f490.jpg',
        username: 'decimalvalues',
        fullName: 'Henry Asiedu',
        followers: {
            '43o0985609wiergportjwpre': {
                uid: '43o0985609wiergportjwpre',
                status: true
            }
        },
        following: {
            '43o0985609wiergportjwpre': {
                uid: '43o0985609wiergportjwpre',
                status: true
            }
        }
    },
    '43o0985609wiergportjwpre': {
        uid: '43o0985609wiergportjwpre',
        email: 'person@gmail.com',
        displayImage: 'https://stylerave.com/wp-content/uploads/2020/07/C8413117-646A-4FAF-8B91-59C55DA10EE4.jpeg',
        username: 'person',
        fullName: 'Elsie Aikins',
        followers: {
            '450943jklglmkwlerlt5l': {
                uid: '450943jklglmkwlerlt5l',
                status: true
            }
        },
        following: {
            '43o0985609wiergportjwpre': {
                uid: '43o0985609wiergportjwpre',
                status: true
            }
        }
    },
    '9035j0tjw0emsrjg09wretw3': {
        uid: '9035j0tjw0emsrjg09wretw3',
        email: 'adomic@gmail.com',
        displayImage: 'https://dezangozone.com/wp-content/uploads/2018/09/aso2Bebi2Bmaboplus.jpg',
        username: 'adomic',
        fullName: 'Adom Bright',
        followers: {
            '43o0985609wiergportjwpre': {
                uid: '43o0985609wiergportjwpre',
                status: true
            },
            '450943jklglmkwlerlt5l': {
                uid: '450943jklglmkwlerlt5l',
                status: true
            },
        },
        following: {
            '43o0985609wiergportjwpre': {
                uid: '43o0985609wiergportjwpre',
                status: true
            }
        }
    }
}

// '9035j0tjw0emsrjg09wretw3': {
//     name: 'dafment',
//     uid: '9035j0tjw0emsrjg09wretw3',
//     src: [
//         {
//             'Opers': {
//                 likes: '12',
//                 uid: 'Opers',
//                 comments: '54',
//                 upload: [
//                     {
//                         uri: 'https://i.pinimg.com/originals/1a/78/d9/1a78d960645f64e5f27f2d08a75f12fc.png'
//                     },
//                     {
//                         uri: 'https://dezangozone.com/wp-content/uploads/2018/09/aso2Bebi2Bmaboplus.jpg'
//                     },
//                     {
//                         uri: 'https://i.pinimg.com/originals/f8/a7/0a/f8a70acd4dd9fecdc2b2d2b9c27cf74c.jpg'
//                     }
//                 ]
//             }
//         }
//     ]
// } as IGalleryCollection,
// '05363jsfgkj24kjkrnwfw': {
//     name: 'frter',
//     uid: '05363jsfgkj24kjkrnwfw',
//     src: [
//         {
//             'Resda': {
//                 likes: '45',
//                 uid: 'Resda',
//                 comments: '12.8k',
//                 upload: [
//                     {
//                         uri: 'https://brandedgirls.b-cdn.net/wp-content/uploads/2021/06/African-Attire-For-Men-13-334x500.jpg'
//                     },
//                     {
//                         uri: 'https://stylerave.com/wp-content/uploads/2020/07/C8413117-646A-4FAF-8B91-59C55DA10EE4.jpeg'
//                     },
//                     {
//                         uri: 'http://s3.weddbook.me/t1/2/9/5/2954846/african-men39s-clothing-african-fashion-wedding-suit-men39s-african-suit-african-clothing-for-men-african-men39s-clothing-wedding-suit.jpg'
//                     }
//                 ]
//             }
//         }
//     ]
// } as IGalleryCollection,


const data = [
    'https://outfittrends.b-cdn.net/wp-content/uploads/2021/03/D5_PADGWAAAdSmO-400x500.jpeg',
    'https://d17a17kld06uk8.cloudfront.net/products/43VMDHH/CH3TJT57-default.jpg',
    'https://i0.wp.com/youstylezcollections.com/wp-content/uploads/2020/11/FB_IMG_16046429091841874.jpg?resize=720%2C720&ssl=1',
    'https://theglossychic.com/wp-content/uploads/2019/11/20191110_001641.jpg',
    'https://global2019-static-cdn.kikuu.com/upload-productImg-1583384640756.jpeg?x-oss-process=style/p85',
    'https://africanvibes.com/ezoimgfmt/i.etsystatic.com/25280270/r/il/ae96f4/2908311420/il_794xN.2908311420_owvr.jpg?ezimgfmt=rs:378x413/rscb92/ngcb92/notWebP',
    'https://clipkulture.com/wp-content/uploads/2020/04/158782323848kgn.jpg',
    'https://i.pinimg.com/736x/6d/34/9c/6d349c286bfb9fc1dc4863590278545b.jpg',
    'https://netstorage-tuko.akamaized.net/images/a91eb71fd624f490.jpg',
    'https://i.pinimg.com/564x/82/92/b5/8292b56c3eb975ab9356b85eb1160716.jpg',
    'https://i.pinimg.com/originals/f0/31/fc/f031fcc150866ef593f93274c6743de1.jpg',
    'https://i.pinimg.com/564x/50/23/d3/5023d3ab7186c23d12156acca31a4479.jpg',
    'https://i.pinimg.com/736x/e3/bb/13/e3bb132ceb1b9945291900281fcdd35b.jpg',
    'https://africanvibes.storage.googleapis.com/wp-content/uploads/2021/06/27184028/Ghana-traditional-bridesmaids-dress-1000x600.jpg'
]

