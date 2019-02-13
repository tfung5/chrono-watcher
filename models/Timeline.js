const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TimelineSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create model
const Timeline = mongoose.model('timeline', TimelineSchema);

module.exports = Timeline;