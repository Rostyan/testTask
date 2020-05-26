const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const post = new Schema({

  name: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  }

}, { collection: "posts" });

module.exports = mongoose.model("Post", post);