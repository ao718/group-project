const express = require('express')
const inventoryRouter = express.Router()
const Item = require('../models/item.js')



inventoryRouter.get('/men', (req, res, next) => {
    Item.find(({gender: 'men'}), (err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)

    })
})


inventoryRouter.get("/department", async (req, res, next) => {
    
    try {
        const items = await Item.find({ gender: req.query.gender, department: req.query.department})
        return res.status(200).send(items)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })

 inventoryRouter.get("/price", async (req, res, next) => {
    
    try {
        const items = await Item.find({ price: req.query.price })
        return res.status(200).send(items)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })

 inventoryRouter.get("/brand", async (req, res, next) => {
    
    try {
        const items = await Item.find({ brand: req.query.brand })
        return res.status(200).send(items)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
 
 })



// Delete

inventoryRouter.delete(`/:_id`, (req, res, next) => {
    Item.findOneAndRemove({_id: req.params._id}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send({ Item: deletedItem, msg: `Successfully Deleted ${deletedItem}`})
    })
})











inventoryRouter.get('/women', (req, res, next) => {
    Item.find(({gender: 'women'}), (err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)

    })
})


// Updat One - PUT
inventoryRouter.put('/:_id', (req, res, next) => {
    Item.findOneAndUpdate(
        {_id: req.params.id},
        req.body, 
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

// Add favorite - PUT
inventoryRouter.put('/favorites/:_id', (req, res, next) => {
    Item.findOneAndUpdate(
        {_id: req.params._id}, 
        {$inc:{favorites: 1 }},
        {newItem: true},
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})










// Post
inventoryRouter.post('/', (req, res, next) => {
    const newItem = new Item(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})






module.exports = inventoryRouter



