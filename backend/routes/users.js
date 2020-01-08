const express = require('express')
const router = express.Router()
const User = require('../models/users')


// Getting all 
router.get('/', async (req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

// Getting one
router.get('/:id', (req,res)=>{

})

// Creating one
router.post('/', async (req,res)=>{
    const user = new User({
        username : req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

// Updating one
router.patch('/', (req,res)=>{

})

// Deleting one
router.delete('/:id', (req,res)=>{

})
module.exports = router