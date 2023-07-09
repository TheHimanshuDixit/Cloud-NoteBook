const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

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

// for sending mail
router.post('/send', async (req, res) => {
    // if there are errors then return bad request and the errors
    try {
        const { name, email, message } = req.body;

        const output = `
                    <h4>You have a message</h4>
                    <h3>Contact Details : </h3>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <h3>Message : </h3>
                    <p>${message}</p>`;

        // Instantiate the SMTP server
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            }
        });
        var mailOption = {
            from: process.env.USER,                                     //Sender mail
            to: email,					                                // Recever mail
            subject: 'Copy of your message',                            // Subject of mail
            html: output
        }
        // Send mail with defined transport object
        transporter.sendMail(mailOption, function (error, info) {
            if (error) {
                res.json({ error: "Not Send" });
            }
            else {
                res.json({ message: "Send" });
            }
        })
    }
    // catch any error
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;