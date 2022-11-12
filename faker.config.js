const { faker, getUsername, repeat, getId} = require('@decimalvalues/faker')

/** @type {import('@decimalvalues/faker').FakerConfig} */
module.exports = {
    outDir: '/',
    filename: 'gallery.json',
    structure: faker({
        username: getUsername(),
        src: repeat({
            uid: getId,
        }, {count: 1, key: 'uid'})
    })
}