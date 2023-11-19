const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      unique: [true, "Name must be unique!"]
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
    },
    quantity: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: "No description."
    },
    size: {
      type: String,
      enum: ["huge", "large", "medium", "small", "tiny"]
    },
    class: {
      type: [String]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
