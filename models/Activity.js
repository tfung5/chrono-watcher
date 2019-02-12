const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ActivitySchema = new Schema({
    name: {
        type: String,
        required: [true, 'The activity is required']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create model for activity
const Activity = mongoose.model('activity', ActivitySchema);

module.exports = Activity;