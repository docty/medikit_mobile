const { faker, getUsername, repeat, getId, getImage, getEmail, getFromList, getText, getName } = require('@decimalvalues/faker')

/** @type {import('@decimalvalues/faker').FakerConfig} */
const gallery = {
    server: {
        start: true,
        port: 3000
    },
    output: 'faker',
   
     
}


module.exports = gallery