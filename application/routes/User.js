const express = require("express");
const router = express.Router();
const FormulaireControleur = require("../controllers/FormulaireControleur");

router.get('/Formulaire', (req,res,next) => {
    console.log('middleware auth', req.method);
    res.render('Formulaire',{pageTitle:"Formulaire"});
})

router.post('/Formulaire',FormulaireControleur.postFormulaire)


router.get('/Tableau_Bord',FormulaireControleur.getTableau_Bord)


module.exports = router;