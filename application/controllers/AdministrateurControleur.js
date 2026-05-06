const User = require('../model/dataUser');
const Annexe = require('../model/dataAnnexe');

const bcrypt = require('bcrypt');



exports.getAdministrateur = (req,res,next) => {
    console.log('middleware Administrateur', req.method);

    const erreurR = req.query.ErreurR;
    const reussiDep = req.query.ReussiDep;
    const reussiRep = req.query.ReussiRep;
    const reussiType_file = req.query.ReussiType_file;
        
    res.render('Administrateur',{pageTitle:"Administrateur",ErreurR:erreurR,ReussiDep:reussiDep,ReussiRep:reussiRep,ReussiType_file:reussiType_file}); 
}

exports.postAddReprographe = async (req,res,next) => {
    console.log('middleware Administrateur AddReprographe', req.method);
    
    if(res.locals.Département.includes(req.body.Département)){

        const name = String(req.body.name).trim().replace(/[<>$"'{};]/g, "");
        const password = String(req.body.password).trim().replace(/[<>$"'{};]/g, "");
        const Prénom = String(req.body.Prénom).trim().replace(/[<>$"'{};]/g, "");


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const Mail = String(req.body.Mail).trim().replace(/[<>$"'{};]/g, "");

        if (!emailRegex.test(Mail)) { 
            return res.redirect('/Administrateur?Erreur=Email invalide'); 
        }

        const hashedPassword = await bcrypt.hash(password, 12);
            
        const user = new User({Nom: name,Prénom: Prénom, Mail: Mail ,Mdp: hashedPassword, Département : req.body.Département, Role : "Reprographe"});
        try {
            await user.save()
            console.log("ok")
        
            return res.redirect('/Administrateur?ReussiRep=Compte Créer');
        } catch (err) {
            return res.redirect('/Administrateur?ErreurR='+err);
        }
    } else {
        return res.redirect('/Administrateur?ErreurR=Département Inconnu');
    }
}

exports.postAddDep = async (req,res,next) =>{
    console.log('middleware Administrateur AddDep', req.method);

    const newDep = String(req.body.newDep).trim().replace(/[<>$"'{};]/g, "");

    try {
        const result = await Annexe.updateOne(
            { Nom_Liste: "Département" },
            { $addToSet: { Valeur: newDep } }
        );

        if (result.matchedCount  === 0) {
            return res.redirect('/Administrateur?ErreurDep=Aucune modification');
        }

        return res.redirect('/Administrateur?ReussiDep=Departement Ajouter#departement');
    } catch (err) {
        return res.redirect('/Administrateur?ErreurDep=Erreur Ajout Département')
    }
}

exports.postModDep = async (req,res,next) =>{
    console.log('middleware Administrateur ModDep', req.method);

    const AnModDep = String(req.body.AnModDep).trim().replace(/[<>$"'{};]/g, "");
    const newModDep = String(req.body.newModDep).trim().replace(/[<>$"'{};]/g, "");

    try {
        const result = await Annexe.updateOne(
            { Nom_Liste: "Département", AnModDep},
            { $set: { "Valeur.$": newModDep } }
        );

        if (result.matchedCount  === 0) {
            return res.redirect('/Administrateur?ReussiDep=Aucune modification');
        }

        return res.redirect('/Administrateur?ReussiDep=Departement Modifier#departement');
    } catch (err) {
        return res.redirect('/Administrateur?ErreurDep=Erreur Modification Département')
    }
}


exports.postDelDep = async (req,res,next) =>{
    console.log('middleware Administrateur DelDep', req.method);

    const AnDelDep = String(req.body.AnDelDep).trim().replace(/[<>$"'{};]/g, "");

    try {
        const result = await Annexe.updateOne(
            { Nom_Liste: "Département" },
            { $pull: { Valeur: AnDelDep } }
        );

        if (result.matchedCount  === 0) {
            return res.redirect('/Administrateur?ErreurDep=Aucune modification');
        }

        return res.redirect('/Administrateur?ReussiDep=Departement Effacer#departement');
    } catch (err) {
        return res.redirect('/Administrateur?ErreurDep=Erreur Effacement Département')
    }
}

exports.postAddType_file = async (req,res,next) =>{
    console.log('middleware Administrateur AddType_file', req.method);

    const NewType_file = String(req.body.NewType_file).trim().replace(/[<>$"'{};]/g, "");

    try {
        const result = await Annexe.updateOne(
            { Nom_Liste: "Type_Doc" },
            { $addToSet: { Valeur: NewType_file } }
        );

        if (result.matchedCount  === 0) {
            return res.redirect('/Administrateur?ErreurType_file=Aucune modification');
        }

        return res.redirect('/Administrateur?ReussiType_file=Type Fichier Ajouter#type_file');
    } catch (err) {
        return res.redirect('/Administrateur?ErreurType_file=Erreur Ajouter Type Fichier')
    }
}

exports.postModType_file = async (req,res,next) =>{
    console.log('middleware Administrateur ModDep', req.method);

    const AnModType_file = String(req.body.AnModType_file).trim().replace(/[<>$"'{};]/g, "");
    const NewModType_file = String(req.body.NewModType_file).trim().replace(/[<>$"'{};]/g, "");

    try {
        const result = await Annexe.updateOne(
            { Nom_Liste: "Type_Doc",Valeur: AnModType_file},
            { $set: { "Valeur.$": NewModType_file } }
        );

        if (result.matchedCount  === 0) {
            return res.redirect('/Administrateur?ErreurType_file=Aucune modification');
        }

        return res.redirect('/Administrateur?ReussiType_file=Type Fichier Modifier#type_file');
    } catch (err) {
        return res.redirect('/Administrateur?ErreurType_file=Erreur Modification Type Fichier');
    }
}


exports.postDelType_file = async (req,res,next) =>{
    console.log('middleware Administrateur DelDep', req.method);

    const AnDelType_file = String(req.body.AnDelType_file).trim().replace(/[<>$"'{};]/g, "");

    try {
        const result = await Annexe.updateOne(
            { Nom_Liste: "Type_Doc" },
            { $pull: { Valeur: AnDelType_file } }
        );

        if (result.matchedCount  === 0) {
            return res.redirect('/Administrateur?ErreurType_file=Aucune modification');
        }

        return res.redirect('/Administrateur?ReussiType_file=Type Fichier Effacer#type_file');
    } catch (err) {
        return res.redirect('/Administrateur?ErreurType_file=Erreur Effacer Type Fichier');
    }
}
