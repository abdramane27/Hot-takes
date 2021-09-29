//----import d'express--
const express = require("express");


//---import du controller-----------
const userCtlr = require("../controllers/user");


const router = express.Router();

//---Route du sign up----------
router.post("/signup", userCtlr.signup);
router.post("/login", userCtlr.signup);








//-------export du module---
module.exports = router;
