const express = require("express");
const router = express.Router();

router.get('/',(req,res,next) => {
    console.log('middleware Acceuil', req.method);

    res.render('Accueil',{pageTitle:"Accueil"});
})

module.exports = router;