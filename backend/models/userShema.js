const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});



userSchema.pre('save',async function (next){
    console.log('hello from inside');

if(this.isModified('password')){   
this.password = await bcrypt.hash(this.password, 12);
this.cpassword = await bcrypt.hash(this.cpassword, 12);
}
next();
});


// generating token and saving to database
userSchema.methods.generateAuthToken = async function(){
try {
    let newToken = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:newToken});
    await this.save();
    return newToken;
} catch (error) {
   console.log(error);
}
}

const User = mongoose.model('users',userSchema);
module.exports = User;



