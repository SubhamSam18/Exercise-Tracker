//express Router
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    //mongoose method to get all the list of user from database
    User.find()
    .then(users=>res.json(users))
    .catch(err => res.status(404).json('Error'+err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
   
    const newUser = new User({username});

    newUser.save()
    .then(()=>res.json('User added!'))
    .catch(err => res.status(400).json('Error: '+err));
});
 
router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(user=> {
        User.find()
        .then(users=>res.json(users))
        .catch(err => res.status(404).json('Error'+err));
    })
    .catch(err=>res.status(400).json('Error: '+err));
});

module.exports = router;