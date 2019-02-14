const express = require("express");
const router = express.Router();

// Load Activity model
const Activity = require("../../models/Activity");

// @route   GET api/activities
// @desc    Get all activities
// @access  Public
router.get("/", (req, res, next) => {
  Activity.find()
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(next);
});

// @route   POST api/activities
// @desc    Post an activity
// @access  Public // Should be Private, still working on implementing this
router.post("/", (req, res, next) => {
  const newActivity = new Activity({
    name: req.body.name
  });
  newActivity
    .save()
    .then(data => res.json(data))
    .catch(next);

  /*
  if (req.body.name) {
    Activity.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty"
    });
  }
  */
});

// @route   DELETE api/activities
// @desc    Delete an activity
// @access  Public
router.delete("/:id", (req, res, next) => {
  Activity.findById(req.params.id)
    .then(activity => activity.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
