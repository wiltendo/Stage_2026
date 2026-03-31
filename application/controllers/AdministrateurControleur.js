const Requete = require('../model/dataRequete');


exports.getAdministrateur = (req,res,next) => {
    console.log('middleware Administrateur', req.method);
        
    res.render('Administrateur',{pageTitle:"Administrateur"}); 
}
