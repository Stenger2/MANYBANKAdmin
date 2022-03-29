const {Schema, model} = require('mongoose')

const schema = new Schema({
    Login:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    }
})

module.exports = model('admin', schema)