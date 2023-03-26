const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String, 
            required: true, 
            unique: true
        }, 
        email: {
            type:String, 
            require: true, 
            unique:true
        }, 
        password: {
            type:String, 
            required: true

        }, 
        profilePic: {
            type:String, 
            default: ""
        },
    },{
        timestamps: true

        //Updated time you can use this timestamps:true
    }


)
module.exports = mongoose.model('User', UserSchema)