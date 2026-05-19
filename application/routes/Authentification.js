const express = require("express");
const router = express.Router();
const AuthControl = require("../controllers/AuthControleur");

router.get('/Auth', (req,res,next) => {
    console.log('middleware auth', req.method);
    const erreur = req.query.Erreur;
    const reussi = req.query.Reussi;

    res.render('Auth',{pageTitle:"Authentification",Erreur:erreur,Reussi:reussi});
})

router.post('/Auth',AuthControl.postAuth);

router.get('/Inscription', (req,res,next) => {
    console.log('middleware auth', req.method);
    const erreur = req.query.Erreur;
    
    res.render('Inscription',{pageTitle:"Inscription",Erreur:erreur});
})

router.post('/Inscription',AuthControl.postInscription)

router.post('/MdpForgottent',AuthControl.postMDPForgottent)


module.exports = router;