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

    try{
        const users = await User.find({});
        res.status(200).send(users);
    }
    catch(error){
        res.status(500).json({ message: error.message});
    }

})


// Get user by id
router.get('/getUser/:id', async (req, res) => {

    try{
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    }
    catch(error){
        res.status(500).json({ message: error.message});
       
    }
})

// Update user by id

// Delete user by id

module.exports = router;