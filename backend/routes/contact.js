const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contactus', async (req, res) => {
    // if there are errors then return bad request and the errors
    try {
        const { name, email, message } = req.body;
        const contact = new Contact({
            name,
            email,
            message
        })
        const savedContact = await contact.save();
        res.json(savedContact);
    }
    // catch any error
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;