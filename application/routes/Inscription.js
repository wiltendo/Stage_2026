const express = require("express");
const router = express.Router();
const AuthControl = require("../controllers/AuthControleur");

router.get('/Inscription', (req,res,next) => {
    console.log('middleware auth', req.method);
    res.render('Inscription',{pageTitle:"Inscription"});
})

router.post('/Inscription',AuthControl.postInscription)

module.exports = router;