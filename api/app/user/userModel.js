const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password: {
        type:String,
        required:[true,'Password is required'],
        validate:{
            validator: function(v){
                return v.length > 4
            },
            message: props => `Password length should be greater than 4`
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }
})


// middleware
userSchema.pre('save', function(next) {
    console.log('pre hook',this)

    this.password = this.encrypt(this.password)
    next()
})


// doc methods
userSchema.methods = {
    encrypt: function(plainPass) {
        return bcrypt.hashSync(plainPass,10);
    },

    compare: function(plainPass) {
        return bcrypt.compareSync(plainPass, this.password);
    }

}




module.exports = mongoose.model('users',userSchema);