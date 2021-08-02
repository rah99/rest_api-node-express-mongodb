const express = require('express')
const subsciber = require('../models/subsciber')
const router = express.Router()
const Subscriber = require('../models/subsciber')

// Routes
// Get multiple
router.get('/', async (req, res) => {
    // res.send('Hello World') // Test to make sure route works - use REST
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message }) // 500 status means server error - the json is wrapped with ({}) to create an object
    }
})

// Get single
router.get('/:id', getSubscriber, (req, res) => { // : indicates a param to query SQL database - not () for getSubscriber as it is not being called
    // res.send(req.params.id) // Test
    // res.send(res.subsciber.name) // Test
    res.json(res.subsciber)
})

// Create single
router.post('/', async (req, res) => {
    const subsciber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subsciber.save()
        res.status(201).json(newSubscriber) // 201 status means successfully created an object
    } catch (error) {
        res.status(400).json({ message: error.message }) // 400 status lets the user know the input was wrong
    }
})

// Update single
router.patch('/:id', getSubscriber, async (req, res) => { // use patch so as it only updates the specified param - PUT would update the entire entry
    if (req.body.name != null) {
        res.subsciber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subsciber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subsciber.save()
        res.json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete single
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subsciber.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Middleware for routes with the same calls
async function getSubscriber(req, res, next) {
    let subsciber // Do not forget this otherwise ther will be no variable to assign the subscriber to
    try {
        subsciber = await Subscriber.findById(req.params.id)
        if (subsciber == null) {
            return res.status(404).json({ message: 'Cannont find subscriber' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.subsciber = subsciber
    next()
}

module.exports = router