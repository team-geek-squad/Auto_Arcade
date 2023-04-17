require('dotenv').config()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const User = require('../models/user.model');

// getting port from .env file
const SECRET_KEY = process.env.SECRET_KEY;

// Create local strategy
const localStrategy = new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
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
})

// add local Strategy to passport
passport.use(localStrategy);
  

// Set up options for JWT authentication
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY // Replace with your own secret key
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


// login method
exports.login = async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send(info.message);
        }
        
        // getting port from .env file
        const SECRET_KEY = process.env.SECRET_KEY;

        const token = jwt.sign({ email: user.email }, SECRET_KEY);
        return res.send({ token });
    })(req, res, next);
}


// register method
exports.register = async (req, res) => {
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
}