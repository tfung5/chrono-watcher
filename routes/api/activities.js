const express = require('express');
const router = express.Router();

// Load Activity model
const Activity = require('../../models/Activity');

// @route   GET api/activities
// @desc    Get all activities
// @access  Public
router.get('/', (req, res, next) => {
    Activity.find()
        .sort({ date: -1 })
        .then( data => res.json(data) )
        .catch(next)
});

// @route   POST api/activities
// @desc    Create an activity
// @access  Public // Should be Private, still working on implementing this
router.post('/', (req, res, next) => {
    /*
    const newActivity = new Activity({
        name: req.body.name
    });
    newActivity.save()
        .then( data => res.json(data) )
        .catch(next)
    */
    
    if (req.body.name) {
        Activity.create(req.body)
            .then( data => res.json(data) )
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
    
});

router.delete('/:id', (req, res, next) => {
    Activity.findOneAndDelete({
        "_id": req.params.id
    })
        .then( data => res.json(data) )
        .catch(next)
});

module.exports = router;