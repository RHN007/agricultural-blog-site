const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        title: {
            type:String, 
            required: true, 
            unique: true
        }, 
        desc: {
            type:String,
            required: true
        }, 
        photo: {
            type:String, 
            required: false,
        }, 
        username: {
            type:String, 
            required: true
        },
        categories: {
            type: Array, 
            required: false
        },
    }, {
        //Updated time you can use this timestamps:true
    timestamps: true
}


)
module.exports = mongoose.model('User', PostSchema)