require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // these params must be included
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Connected to database'))

app.use(express.json()) // Middleware before setting up routes

const subscriberRouter = require('./routes/subscribers') // Setup routes - remember to setup a corrsponding folder and file
app.use('/subscribers', subscriberRouter)

app.listen(3000, () => console.log('Server up!'))