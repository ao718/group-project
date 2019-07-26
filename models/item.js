const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema ({
    gender: {
        type: String,
        required: true,
        enum: [ 'men' , 'women']
    },

    department: {
        type: String,
        required: true,
        enum: [ 'shirts', 'pants', 'shoes', `accessories`, `socks & underwear`, `outerwear` ]
    },

    clothingSize: {
        type: String,
        required: true,
        enum: [`x-small`,`small`, `medium`, `large`, `x-large`]
    },
    price: {
        type: Number,
        required: true,
        enum:[`$0-25`, `$25-50`, `$50-75`, `$75-100`, `$100-200`]
    },
    imgUrl: {
        type: String,
        required: true
    },
    
    brand: {
        type: String,
        required: true
    },

    favorites: {
        type: Number,
        default: 0
    },
    
    description: {
        type: String,
        default: ''
    }
    
})


module.exports = mongoose.model('item' , itemSchema)