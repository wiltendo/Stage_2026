const express = require("express");
const router = express.Router();
const FormulaireControleur = require("../controllers/FormulaireControleur");
const isAuth = require("../auth_middleware/authroutes");

router.get('/Formulaire',isAuth, (req,res,next) => {
    console.log('middleware auth', req.method);
    const erreur = req.query.Erreur;
    
    res.render('Formulaire',{pageTitle:"Formulaire",Erreur:erreur});
})

router.post('/Formulaire',isAuth,FormulaireControleur.postFormulaire)


router.get('/Tableau_Bord',isAuth,FormulaireControleur.getTableau_Bord)


module.exports = router;