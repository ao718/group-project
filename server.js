const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require("dotenv").config()
const PORT = process.env.PORT || 7000


// Middleware
app.use(morgan('dev'))
app.use(express.json())



// Connection to DB
mongoose.connect('mongodb://localhost:27017/groupprojectdb', 
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log('connected to the DB'))
.catch((err) => console.log(err))



// Routes
app.use('/inventory', require('./routes/inventoryRouter.js'))


// Error Handle
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


// Server listen
app.listen(PORT, () => {
    console.log('its up')
})


