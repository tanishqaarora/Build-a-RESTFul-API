const express = require('express');
const User = require('../models/user');
const router = express.Router();

// creating a user
router.post('/post', async (req, res) => {
   
    const user = new User({
        name: req.body.name,
        age: req.body.age
    })
    
    // saving user to db
    const userData = await user.save();
    res.status(200).send(userData);

})

// Getting all the users
router.get('/getAllUsers', async (req, res) => {

    const getUsers = await User.find({});
    res.status(200).send(getUsers);

})


// Get user by id


// Update user by id

// Delete user by id

module.exports = router;