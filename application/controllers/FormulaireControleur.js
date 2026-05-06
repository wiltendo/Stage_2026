const Requete = require('../model/dataRequete');
const User = require('../model/dataUser');
const fileUpload = require('express-fileupload');

const path = require('path');

exports.postFormulaire = async (req,res,next) => {
    console.log('middleware Formulaire', req.method);

    const nb_exemplaire = Number(req.body.nb_exemplaire);
    const nb_page = Number(req.body.nb_page);

    if(!Number.isInteger(nb_exemplaire) || nb_exemplaire <= 0 || nb_exemplaire > 1000){
        return res.redirect('/Formulaire?Erreur="Nombre exemplaire pas un nombre"')
    }
    if(!Number.isInteger(nb_page) || nb_page <= 0 || nb_page > 1000){
        return res.redirect('/Formulaire?Erreur="Nombre de page pas un nombre"')
    }

    const dateObj = new Date(req.body.date_retour);
    const today = new Date();
    if(isNaN(dateObj.getTime()) || dateObj < today){
        return res.redirect('/Formulaire?Erreur="Date Inconnu"')
    }
    let sampleFile;
    let uploadPath;

    const allowedTypes = res.locals.Type_Document;

    if (!allowedTypes.includes(req.body.Type_fic)) {
        return res.redirect('/Formulaire?Erreur=Type fichier interdit');
    }
                    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.redirect('/Formulaire?Erreur="Aucun fichier"');
    }

    const name_doc = String(req.body.name_doc).trim().replace(/[<>$"'{};]/g, "");
                    
                    
    const userName = await User.findOne({_id:req.session.user},{Nom:1,Prénom:1})
    const requete = new Requete({
        Nom_Doc:name_doc,
        Type_Doc:req.body.Type_fic,
        Nb_exemplaire:nb_exemplaire,
        Nb_page:nb_page,
        Recto:req.body.recto_verso,
        Agrafe:req.body.Agrafe,
        date_retour:req.body.date_retour,
        User: req.session.user,
        User_Name :userName.Nom + " " + userName.Prénom,
        Position_Fichier:__dirname + '/File/' 
    });
    sampleFile = req.files.sampleFile;
    uploadPath = path.join(__dirname, 'File', requete._id + '.' + req.body.Type_fic);

    try {
        await requete.save()
        console.log("ok")
                        
    } catch (err) {
        return res.redirect('/Formulaire?Erreur="Probleme Upload Fichier"');
    }

    try {
        await sampleFile.mv(uploadPath);
    } catch (err) {
        return res.redirect('/Formulaire?Erreur="Probleme Upload Fichier"');
    }

    return res.redirect('/Tableau_bord?Reussi=Le ticket a été créé');
}

exports.getTableau_Bord = async (req,res,next) => {
    console.log('middleware Formulaire', req.method);
    const reussi = req.query.Reussi;
    
    res.render('Tableau_Bord',{pageTitle:"Tableau de Bord",Reussi:reussi,listeRequeteUser: await Requete.find({User:req.session.user})});
}