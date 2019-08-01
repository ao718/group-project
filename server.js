const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000
const expressJwt = require('express-jwt')


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
app.use(`/api`, expressJwt({secret: process.env.SECRET}))
app.use('/inventory', require('./routes/inventoryRouter.js'))
app.use(`/auth`, require(`./routes/authRouter.js`))
app.use(`/api/favorite`, require(`./routes/favoriteRouter.js`))
// Error Handle

app.use((err, req, res, next) => {
    console.error(err)
    
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

// Server listen
app.listen(PORT, () => {
    console.log('its up')
})