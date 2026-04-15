const Requete = require('../model/dataRequete');
const User = require('../model/dataUser');
const fileUpload = require('express-fileupload');

exports.postFormulaire = async (req,res,next) => {
    console.log('middleware Formulaire', req.method);
    if(res.locals.Type_Document.includes(req.body.Type_fic)){
        if(Number.isInteger(Number(req.body.nb_exemplaire))){
            if(Number.isInteger(Number(req.body.nb_page))){
                const dateObj = new Date(req.body.date_retour);
                const today = new Date();
                if(!isNaN(dateObj.getTime() && dateObj < today)){
                    let sampleFile;
                    let uploadPath;
                    
                    if (!req.files || Object.keys(req.files).length === 0) {
                        return res.redirect('/Formulaire?Erreur="Aucun fichier"');
                    }

                    console.log(await User.find({_id:req.session.user},{Nom:1,Prénom:1}))
                    const userName = await User.findOne({_id:req.session.user},{Nom:1,Prénom:1})
                    const requete = new Requete({
                        Nom_Doc:req.body.name_doc,
                        Type_Doc:req.body.Type_fic,
                        Nb_exemplaire:req.body.nb_exemplaire,
                        Nb_page:req.body.nb_page,
                        Recto:req.body.recto_verso,
                        Agrafe:req.body.Agrafe,
                        date_retour:req.body.date_retour,
                        User: req.session.user,
                        User_Name :userName.Nom + " " + userName.Prénom,
                        Position_Fichier:__dirname + '/File/' 
                    });
                    sampleFile = req.files.sampleFile;
                    uploadPath = __dirname + '/File/' + requete._id+'.'+ req.body.Type_fic;


                    await requete.save()
                        .then((result) => { console.log("ok")})
                        .catch((err) => {console.log(err)});

                    sampleFile.mv(uploadPath, function(err) {
                        if (err) {
                            return res.redirect('/Formulaire?Erreur="Probleme Upload Fichier"');
                        }
                        return res.redirect('/Tableau_bord?Reussi=Le ticket a été créé');
                    });
                }else{
                    res.redirect('/Formulaire?Erreur="Date Inconnu"')
                }
            }else{
                res.redirect('/Formulaire?Erreur="Nombre de page pas un nombre"')
            }
        }else{
            res.redirect('/Formulaire?Erreur="Nombre exemplaire pas un nombre"')
        }
    } else {
        res.redirect('/Formulaire?Erreur="Type du fichier Inconnu"')
    }
}

exports.getTableau_Bord = async (req,res,next) => {
    console.log('middleware Formulaire', req.method);
    const reussi = req.query.Reussi;
    
    res.render('Tableau_Bord',{pageTitle:"Tableau de Bord",Reussi:reussi,listeRequeteUser: await Requete.find({User:req.session.user})});
}