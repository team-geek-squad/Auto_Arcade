const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    manufactured_year: {
      type: Number,
    },
    meterReading: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    sellerName: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    imageURLs: [
      {
        type : String,
        required: true
      }
    ]
  },
  {
    timestamps: true,
  }
);

vehicleSchema.index({'$**': 'text'});

module.exports = mongoose.model("Vehicle", vehicleSchema);

