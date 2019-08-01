const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')


// Signup, Login
    // Authenticate the user
    // Create and send a token


authRouter.post(`/signup`, (req, res, next) => {
    // Check the database to see if the requested username already exist
    User.findOne({ username: req.body.username}, (err, user) => {
       if(err){
           res.status(500)
           return next(err)
        }
        // if it does, send back an error
        if(user){
            res.status(400)
            return next(new Error(`That username is already taken.`))
        }
        // if it doesnt, create the user and the token, send them both back
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            
            }
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({token, user: savedUser})

        })
    })    
})

authRouter.post(`/login`, (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        
        if(!user || user.password !== req.body.password){
            res.status(403)
            return next(new Error(`Username or Password are incorrect`))
        }

        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({token, user})
    })
})







module.exports = authRouter