const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const authRouter = require("./services/authServices");
const vehicleRouter = require("./services/vehicleServices");

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

app.use(cors());
app.use(express.json());

// server listening to requests on port on env file
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});

// Mount the auth router on the /auth path
app.use("/auth", authRouter);
// Mount the vehicle router on the /listing path
app.use("/listing", vehicleRouter);

// Create a protected route
app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(`Hello there`);
  }
);
