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

cartRouter.put(`/`, async(req, res, next) => {
    const{cart: removeItem} = req.body
    try{
        const user = await User.findOne({_id: req.user._id})
        const updatedUser = await User.findOneAndUpdate(
            {_id: req.user._id},
            {cart: user.cart.filter(item => item._id !== removeItem._id)},
            {new: true}
        )
        return res.status(201).send(updatedUser)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
      
})


module.exports= cartRouter