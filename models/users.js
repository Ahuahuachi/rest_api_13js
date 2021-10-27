/**
 *
 * Entidad user:
 *  firstName
 *      string
 *      max characters: 20
 *  lastName
 *      string
 *      max characters: 20
 *  username
 *      string
 *      max characters: 50
 *      required
 *  password
 *      password
 */

const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  firstName: {
    type: String,
    required: false,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  username: {
    type: String,
    required: false,
    trim: true,
    maxlength: 50,
    minlength: 1,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
});

module.exports = {
  model: mongoose.model("User", schema),
  schema,
};
