const {Schema, model} = require('mongoose')

const schema = new Schema({
    Name:{
        type: String,
        required: true
    },
    Phone:{
        type: String,
        required:true
    },
    Mail:{
        type: String,
        required: true
    }
})

module.exports = model('credit', schema)