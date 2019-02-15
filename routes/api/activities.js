var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load activity validation
const validateActivityInput = require("../../validation/activity");

// Load Activity model
const Activity = require("../../models/Activity");

// getActivities endpoint
// @route   GET api/activities
// @desc    Get all activities
// @access  Public
router.get("/", (req, res, next) => {
  Activity.find({ email: req.query.email })
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(next);
}); // End getActivities endpoint

// addActivity endpoint
// @route   POST api/activities
// @desc    Post an activity
// @access  Public
router.post("/", (req, res, next) => {
  // Form validation
  const { errors, isValid } = validateActivityInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  if (req.body.name) {
    const newActivity = new Activity({
      name: req.body.name,
      email: req.body.email
    });
    newActivity
      .save()
      .then(data => res.json(data))
      .catch(err => console.log(err));
  }
}); // End addActivity endpoint

// deleteActivity endpoint
// @route   DELETE api/activities
// @desc    Delete an activity
// @access  Public
router.delete("/:id", (req, res, next) => {
  Activity.findById(req.params.id)
    .then(activity => activity.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
}); // End deleteActivity endpoint

module.exports = router;
