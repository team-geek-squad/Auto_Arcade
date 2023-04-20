const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
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
    price: {
      type: Number,
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
