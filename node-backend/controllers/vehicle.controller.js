const Vehicle = require("../models/vehicle.model");
const mongoose = require("mongoose");
const {cloudinary} = require('../utils/cloudinary')
require('dotenv').config()

exports.imageUpload = async (req, res) => {
    try {
      const fileStr = req.body.base64image;
      // console.log(req);
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'geekSquid',
      });
      console.log(uploadResponse);

      // get this url and send it back with json object to add new vehicle
      res.send({url: uploadResponse.url}); 
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error uploading image' });
    }
  }


exports.searchVehicles = async (req, res) => {
  const searchString = req.body.text;
  const vehicles = await Vehicle.find({$text: {$search: searchString}})
  .sort({ createdAt: -1 });

  res.status(200).json(vehicles);
}

exports.getAllVehicles = async (req, res) => {
    const vehicles = await Vehicle.find({}).sort({ createdAt: -1 });
  
    res.status(200).json(vehicles);
}

exports.getfilterdVehicles = async (req, res) => {
  const filterOptions = req.body;
  const vehicles = await Vehicle.find(filterOptions).sort({ createdAt: -1 });

  res.status(200).json(vehicles);
}

  
exports.getVehicleById = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Listing" });
    }
  
    const vehicle = await Vehicle.findById(id);
  
    if (!vehicle) {
      return res.status(404).json({ error: "No such Listing" });
    }
    res.status(200).json(vehicle);
  }


exports.addNewVehicle =   async (req, res) => {
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


exports.deleteById = async (req, res) => {
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

exports.updateById = async (req, res) => {
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