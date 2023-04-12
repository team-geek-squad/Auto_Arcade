const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require('./auth')

// getting port from .env file
const PORT = process.env.PORT;

// require database connection
const dbConnect = require("./db/dbConnect");
// require user model
const User = require('./models/user.model');

// execute database connection
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(cors())
app.use(express.json())


// server listening to requests on port on env file
app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})


// user registration endpoint
app.post('/register', async (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hashedPassword) => {
            // creating user object
            const user = new User({
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            });

            // saving user data to database
            user.save().then((result) => {
                res.status(201).send({
                    message: "User Created Successfully",
                    result,
                });
            })
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        .catch((e) => {
            res.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });
})

// user login endpoint
app.post("/login", (req, res) => {
    // check if email exists
    User.findOne({ email: req.body.email })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(req.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if(!passwordCheck) {
                        return res.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success res
                    res.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    res.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            res.status(404).send({
                message: "Email not found",
                e,
            });
        });
});
