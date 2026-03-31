const express = require("express");
const router = express.Router();
const AuthControl = require("../controllers/AuthControleur");

router.get('/Auth', (req,res,next) => {
    console.log('middleware auth', req.method);
    res.render('Auth',{pageTitle:"Authentification"});
})

router.post('/Auth',AuthControl.postAuth)

module.exports = router;