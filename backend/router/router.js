const express = require('express');
const User = require('../models/userShema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
require('../db/conn');


const router = express.Router();


router.post('/signup', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(404).json({ error: "please fill all the fields" })
    }
    const reaptEmail = await User.findOne({ email: email });
    const reaptPhone = await User.findOne({ phone: phone });
    if (reaptEmail) {
        return res.status(422).json({ error: "Email already exsits" });
    }
    else if (reaptPhone) {
        return res.status(422).json({ error: "Phone already exsits" });
    }
    else if (password != cpassword) {
        return res.status(422).json({ error: "password mismatch" });
    }
    else {
        let data = new User({ name, email, phone, work, password, cpassword });
        let result = await data.save();
        res.status(201).send(result);
        console.log(result);

    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);
    if (!email || !password) {
        res.status(400).json({ error: "fill all the data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
        // hashing password and generating token
        const pswdMatch = await bcrypt.compare(password, userLogin.password);
        if (!pswdMatch) {
            res.status(400).json({ error: "incorrect passoword" });
        } else {
            let newToken = await userLogin.generateAuthToken();
            console.log(newToken);
            //token adding in cookie
            res.cookie('jwttoken', newToken, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            return res.status(201).json({ succes: "Login Successful " });
        }
    }
    else {
        res.status(400).json({ error: "incorrect email " });
    }
});


router.get('/profile', authenticate, (req, res) => {
    console.log('about page')
    res.send(req.rootUser);
});


router.get('/about', authenticate, (req, res) => {
    console.log('about page')
    res.send(req.rootUser);
});


// Logout page 
router.get('/logout', (req, res) => {
    console.log(`Hello my Logout Page`);
    res.clearCookie('jwttoken', { path: '/' });
    res.status(200).send('User logout');
});


module.exports = router;