const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const JWT_SECRET = 'thisisasecret';

// create a user using : POST "/api/auth/". Doesn't need to be Authenticated
// @route   GET api/auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),  
    body('password', 'Enter a valid password').isLength({ min: 5 })
    ], async (req, res) => {

    // if there are errors then return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {
        // check if user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ "Error": "User with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
            .then(user => {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authtoken = jwt.sign(data, JWT_SECRET) // create a token
                console.log(authtoken);
                res.json({ authtoken });
                // console.log(user);
                // res.json(user)
            })
            .catch(err => {
                console.log(err);
                res.json({ "Error": "Some error occured" })
            });
    } 
    // catch any error
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;