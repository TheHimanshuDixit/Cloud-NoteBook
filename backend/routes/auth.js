const express = require('express');
const User = require('../models/User');
const { query, validationResult } = require('express-validator');
const router = express.Router();

// create a user using : POST "/api/auth/". Doesn't need to be Authenticated

// @route   GET api/auth
router.post('/', [query('email', 'Enter a valid email').isEmail(), query('name', 'Enter a valid name').isLength({ min: 3 }), query('password', 'Enter a valid password').isLength({ min: 5 })], async (req, res) => {

    // if there are errors then return bad request and the errors
    const result = validationResult(req);
    if (result.isEmpty()) {
        return res.send(req.body);
    }

    // check if user with this email exists already
    let user = User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ "Error": "User with this email already exists" });
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
        .then(user => res.json(user))
        .catch(err => {
            console.log(err);
            res.json({ "Error": "Some error occured" })
        });

})

module.exports = router;