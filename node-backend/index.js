const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/auth.route");
const vehicleRouter = require("./routes/vehicle.route");
const fileUpload = require('express-fileupload');

// require database connection
const dbConnect = require("./db/dbConnect");

// execute database connection
dbConnect();

// getting port from .env file
const PORT = process.env.PORT;

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
app.use(express.json({limit: "50mb", extended:true}));
app.use(express.urlencoded({limit: "50mb", extended:true}));

app.use(fileUpload());

// Mount the auth router on the /auth path
app.use("/auth", authRouter);
// Mount the vehicle router on the /listing path
app.use("/listing", vehicleRouter);


// server listening to requests on port on env file
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});

