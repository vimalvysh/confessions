const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Messages = new Schema({
  mesg: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  comment: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model("Confessions", Messages);
