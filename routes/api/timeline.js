const express = require('express');
const router = express.Router();

// Load Activity model
const Timeline = require('../../models/Timeline');

// Get everything from the database
router.get('/activities', (req, res, next) => {
    Timeline.find( {}, {name: 'name', date: 'date'})
        .then( data => res.json(data) )
        .catch(next)
});

// Send a new activity to the database
// Or return an error if the input field is empty
router.post('/activities', (req, res, next) => {
    if (req.body.name) {
        Timeline.create(req.body)
            .then( data => res.json(data) )
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/activities/:id', (req, res, next) => {
    Timeline.findOneAndDelete({
        "_id": req.params.id
    })
        .then( data => res.json(data) )
        .catch(next)
});

module.exports = router;