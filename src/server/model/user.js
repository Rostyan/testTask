const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: 'Invalid Email address' })
      }
    }
  },
  password: {
    type: String,
    required: true,
  },

}, { collection: "users" });

module.exports = mongoose.model("User", userSchema);