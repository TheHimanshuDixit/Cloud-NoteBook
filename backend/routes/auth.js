const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'thisisasecret';

// Route 1 : create a user using : POST "/api/auth/createuser".No login required
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


// Route 2 : Authenticate a user using : POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

    let success = false;
    // if there are errors then return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ success, errors: result.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET) // create a token
        success = true;
        console.log(authtoken);
        res.json({ success, authtoken })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// Route 3 : Get loggedin user Details using : POST "/api/auth/getuser". No login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;