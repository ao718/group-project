const express = require("express")
const cartRouter = express.Router()
const User = require("../models/user.js")


cartRouter.put('/:_id', (req, res, next) => {
    User.findOneAndUpdate(
        {_id: req.params._id},
        {cart: req.body.cart}, 
        {new: true},
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

cartRouter.get("/:id", (req, res, next) => {
    User.findOne({_id: req.params.id}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            return res.status(200).send({cart: user.cart})
            
        }
    })
})


module.exports= cartRouter