const express = require('express');
const router = express.Router();
require('dotenv').config()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

// require user model
const User = require('../models/user.model');


// Configure PassportJS to use the local strategy
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Invalid email or password' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

  
// Set up options for JWT authentication
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_secret_key-123' // Replace with your own secret key
};
  
// Create JWT strategy
const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    const user = await User.findOne({email: jwtPayload.email})

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
});
  
// Add JWT strategy to PassportJS
passport.use(jwtStrategy);
  
// Create a login route
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send(info.message);
        }
        const token = jwt.sign({ email: user.email }, 'your_secret_key-123');
        return res.send({ token });
    })(req, res, next);
});
  

// user registration endpoint
router.post('/register', async (req, res) => {
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

module.exports = router;
