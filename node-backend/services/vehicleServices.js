const express = require("express");
const Vehicle = require("../models/vehicle.model");
const mongoose = require("mongoose");
const passport = require("passport");
const {cloudinary} = require('../utils/cloudinary')
require('dotenv').config()


const router = express.Router();

// route for upload image
// ---------------------------------- some images still fails in encoding to base64, need to fix ----------------------------------------
router.post('/upload', async (req, res) => {
  try {
    const fileStr = req.body.base64image;
    // console.log(req);
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'geekSquid',
    });
    console.log(uploadResponse);
    res.send({url: uploadResponse.url});

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});


// GET all vehicles
router.get("/", async (req, res) => {
  const vehicles = await Vehicle.find({}).sort({ createdAt: -1 });

  res.status(200).json(vehicles);
});

// GET a single vehicle
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Listing" });
  }

  const vehicle = await Vehicle.findById(id);

  if (!vehicle) {
    return res.status(404).json({ error: "No such Listing" });
  }
  res.status(200).json(vehicle);
});

// POST a vehicle
router.post(
  "/new_vehicle", 
  passport.authenticate("jwt", { session: false }), 
  async (req, res) => {
    const { brand, model, manufactured_year, price, imageURLs } = req.body;

    // add code to check for empty feilds and send it to frontend

    // add doc to DB
    try {
      const vehicle = await Vehicle.create({
        brand,
        model,
        manufactured_year,
        price,
        imageURLs
      });
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

// DELETE a vehicle
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }), 
  async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Listing" });
    }

    const vehicle = await Vehicle.findOneAndDelete({ _id: id });

    if (!vehicle) {
      return res.status(404).json({ error: "No such Listing" });
    }
    res.status(200).json(vehicle);
  }
);

// UPDATE a vehicle
router.patch(
  "/:id", 
  passport.authenticate("jwt", { session: false }), 
  async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Listing" });
    }

    const vehicle = await Vehicle.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!vehicle) {
      return res.status(404).json({ error: "No such Listing" });
    }
    res.status(200).json(vehicle);
  }
);

module.exports = router;
