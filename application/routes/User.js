const express = require("express");
const router = express.Router();
const FormulaireControleur = require("../controllers/FormulaireControleur");
const isAuth = require("../auth_middleware/authroutes");
const isUser = require("../auth_middleware/userroutes");

router.get('/Formulaire',isAuth,isUser, (req,res,next) => {
    console.log('middleware auth', req.method);
    const erreur = req.query.Erreur;
    
    res.render('Formulaire',{pageTitle:"Formulaire",Erreur:erreur});
})

router.post('/Formulaire',isAuth,isUser,FormulaireControleur.postFormulaire)


router.get('/Tableau_Bord',isAuth,isUser,FormulaireControleur.getTableau_Bord)


module.exports = router;