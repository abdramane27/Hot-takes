//-----import du Schéma-----------
const User = require("../models/User");
const bcrypt = require('bcrypt');


//----fonction sign up------------
exports.signup =(req, res,next)=>{
bcrypt.hash(req.body.password, 10)
.then(hash=>{
    const user =new User ({
        email: req.body.email,
        password: hash 
    });
    user.save()
    .then(()=> res.status(201).json({message : 'utilisateur créé et sauvegarder'}))
    .catch((error)=> res.status(500).json({error}))
})
next()
.catch((error)=> res.status(500).json({error}))
};





