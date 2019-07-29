const express = require('express')
const emailRouter = express.Router()
const Item = require('../models/emails.js')



emailRouter.get('', (req, res, next) => {
    email.find(({email: ''}), (err, email) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(email)

    })
})


emailRouter.get("", async (req, res, next) => {
    
    try {
        const emails = await email.find({ email: req.query.email })
        return res.status(200).send(emails)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })

 emailRouter.get(" ", async (req, res, next) => {
    
    try {
        const emails = await email.find({ price: req.query.price })
        return res.status(200).send(emails)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })

 emailRouter.get("", async (req, res, next) => {
    
    try {
        const items = await email.find({ brand: req.query.brand })
        return res.status(200).send(emails)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })



// Delete

emailRouter.delete(``, (req, res, next) => {
    email.findOneAndRemove({_id: req.params._id}, (err, deletedEmail) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send({ Item: deletedEmail, msg: `Successfully Deleted ${deletedEmail}`})
    })
})











emailRouter.get('', (req, res, next) => {
    email.find(({gender: 'women'}), (err, email) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(email)

    })
})


// Updat One - PUT
email.put("", (req, res, next) => {
    email.findOneAndUpdate(
        {_id: req.params.id},
        req.body, 
        {new: true},
        (err, updatedEmail) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedEmail)
        }
    )
})

// Add favorite - PUT
emailRouter.put("", (req, res, next) => {
    Item.findOneAndUpdate(
        {_id: req.params._id}, 
        {$inc:{favorites: 1 }},
        {newItem: true},
        (err, updatedEmail) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedEmail)
        }
    )
})










// Post
emailRouter.post('', (req, res, next) => {
    const newEmail = new Email(req.body)
    newEmail.save((err, savedEmail) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedEmail)
    })
})






module.exports = emailRouter