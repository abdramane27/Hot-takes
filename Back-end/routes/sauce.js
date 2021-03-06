const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const multer = require('../middleware/multer-config')



const sauceCtlr = require('../controllers/sauce');

router.get('/',auth, sauceCtlr.getAllSauce);

router.post('/',auth, multer, sauceCtlr.createSauce);

router.get('/:id',auth, sauceCtlr.getOneSauce);

router.put('/:id',auth, multer, sauceCtlr.modifySauce);

router.delete('/:id',auth, sauceCtlr.deleteSauce);

router.post('/:id/like',auth, sauceCtlr.createLike)




module.exports = router;