const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActivitySchema = new Schema({
  name: {
    type: String,
    required: [true, "The activity name is required"]
  },
  date: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String
  }
});

// Create model
const Activity = mongoose.model("activity", ActivitySchema);

module.exports = Activity;
