const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/userShema');

const authenticate = async (req,res,next)=>{
    try{

      //getting token from the cookies in the browser
const token = req.cookies.jwttoken;  

     //verifying token with secret key in server
const verfyToken = jwt.verify(token,process.env.SECRET_KEY);      
console.log(verfyToken);

// getting data from batabase by veryfying token and id with database
const rootUser = await User.findOne({_id:verfyToken._id,'tokens.token':token}) 
if(!rootUser){
    console.log('user not found')
}
req.token = token;
req.rootUser = rootUser;
req.userId = rootUser._id;
next();
    }
    catch(err){
        res.status(401).send('unauthorised no: NO token provided');
        console.log(err);
    }
}

module.exports = authenticate;