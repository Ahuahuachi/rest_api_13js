const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  key: {
    type: String,
    requried: true,
    trim: true,
  },
});

module.exports = {
  model: mongoose.model("Product", schema),
  schema,
};
