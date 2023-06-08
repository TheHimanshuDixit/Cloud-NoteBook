const express = require('express');
const router = express.Router();

// @route   GET api/auth
router.get('/', (req, res)=> {
    res.json({
        msg: 'Welcome to the auth route'
    })
})

module.exports = router;