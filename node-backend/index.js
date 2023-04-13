const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const jwt = require("jsonwebtoken");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const authRouter = require('./services/authServices')

// getting port from .env file
const PORT = process.env.PORT;

// getting port from .env file
const SECRET_KEY = process.env.SECRET_KEY;

// require database connection
const dbConnect = require("./db/dbConnect");
// require user model
// const User = require('./models/user.model');

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

// Mount the auth router on the /auth path
app.use('/auth', authRouter);

// // Configure PassportJS to use the local strategy
// passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
//     try {
//       const user = await User.findOne({ email });
//       if (!user) {
//         return done(null, false, { message: 'Invalid email or password' });
//       }
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return done(null, false, { message: 'Invalid email or password' });
//       }
//       return done(null, user);
//     } catch (err) {
//       return done(err);
//     }
//   }));

  
// // Set up options for JWT authentication
// const jwtOptions = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: SECRET_KEY
//   };
  
//   // Create JWT strategy
//   const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
//     const user = await User.findOne({email: jwtPayload.email})

//       if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//   });
  
//   // Add JWT strategy to PassportJS
//   passport.use(jwtStrategy);

  
// // Initialize PassportJS
// app.use(passport.initialize());

  
//   // Create a login route
//   app.post('/login', (req, res, next) => {
//     passport.authenticate('local', { session: false }, (err, user, info) => {
//       if (err) {
//         return next(err);
//       }
//       if (!user) {
//         return res.status(401).send(info.message);
//       }
//       const token = jwt.sign({ email: user.email }, SECRET_KEY);
//       return res.send({ token });
//     })(req, res, next);
//   });
  
  // Create a protected route
  app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send(`Hello there`);
  });

// // user registration endpoint
// app.post('/register', async (req, res) => {
//     bcrypt.hash(req.body.password, 10)
//         .then((hashedPassword) => {
//             // creating user object
//             const user = new User({
//                 fullname: req.body.fullname,
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: hashedPassword,
//             });

//             // saving user data to database
//             user.save().then((result) => {
//                 res.status(201).send({
//                     message: "User Created Successfully",
//                     result,
//                 });
//             })
//                 .catch((error) => {
//                     res.status(500).send({
//                         message: "Error creating user",
//                         error,
//                     });
//                 });
//         })
//         .catch((e) => {
//             res.status(500).send({
//                 message: "Password was not hashed successfully",
//                 e,
//             });
//         });
// })
