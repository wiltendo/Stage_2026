const Requete = require('../model/dataRequete');


exports.postFormulaire = (req,res,next) => {
    console.log('middleware Formulaire', req.method);

    const requete = new Requete({
        Nom_Doc:req.body.name_doc,
        Type_Doc:req.body.Type_fic,
        Nb_exemplaire:req.body.nb_exemplaire,
        Nb_page:req.body.nb_page,
        Recto:req.body.recto_verso,
        Agrafe:req.body.Agrafe,
        date_retour:req.body.date_retour,
        User: req.session.user
    });
    requete.save()
        .then((result) => { console.log("ok")})
        .catch((err) => {console.log(err)});
    res.redirect('/Tableau_bord');
}

exports.getTableau_Bord = async (req,res,next) => {
    console.log('middleware Formulaire', req.method);
    
    res.render('Tableau_Bord',{pageTitle:"Tableau de Bord",listeRequeteUser: await Requete.find({User:req.session.user})});
}