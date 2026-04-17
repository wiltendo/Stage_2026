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
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
            
        const user = new User({Nom: req.body.name,Prénom: req.body.Prénom, Mail:req.body.Mail ,Mdp: hashedPassword, Département : req.body.Département, Role : "Reprographe"});
        user.save()
            .then((result) => { console.log("ok")})
            .catch((err) => {res.redirect('/Administrateur?ErreurR='+err);});
        
        res.redirect('/Administrateur?ReussiRep="Compte Créer"');
    } else {
        res.redirect('/Administrateur?ErreurR="Département Inconnu"');
    }
}

exports.postAddDep = async (req,res,next) =>{
    console.log('middleware Administrateur AddDep', req.method);

    await Annexe.updateOne(
        { Nom_Liste: "Département" },
        { $push: { Valeur: req.body.NewDep } }
    );

    res.redirect('/Administrateur?ReussiDep="Departement Ajouter"#departement');
}

exports.postModDep = async (req,res,next) =>{
    console.log('middleware Administrateur ModDep', req.method);

    await Annexe.updateOne(
        { Nom_Liste: "Département",Valeur:req.body.AnModDep},
        { $set: { "Valeur.$": req.body.NewModDep } }
    );

    res.redirect('/Administrateur?ReussiDep="Departement Modifier"#departement');
}


exports.postDelDep = async (req,res,next) =>{
    console.log('middleware Administrateur DelDep', req.method);

    await Annexe.updateOne(
        { Nom_Liste: "Département" },
        { $pull: { Valeur: req.body.AnDelDep } }
    );

    res.redirect('/Administrateur?ReussiDep="Departement Effacer"#departement');
}

exports.postAddType_file = async (req,res,next) =>{
    console.log('middleware Administrateur AddType_file', req.method);

    await Annexe.updateOne(
        { Nom_Liste: "Type_Doc" },
        { $push: { Valeur: req.body.NewType_file } }
    );

    res.redirect('/Administrateur?ReussiType_file="Type Fichier Ajouter"#type_file');
}

exports.postModType_file = async (req,res,next) =>{
    console.log('middleware Administrateur ModDep', req.method);

    await Annexe.updateOne(
        { Nom_Liste: "Type_Doc",Valeur:req.body.AnModType_file},
        { $set: { "Valeur.$": req.body.NewModType_file } }
    );

    res.redirect('/Administrateur?ReussiType_file="Type Fichier Modifier"#type_file');
}


exports.postDelType_file = async (req,res,next) =>{
    console.log('middleware Administrateur DelDep', req.method);

    await Annexe.updateOne(
        { Nom_Liste: "Type_Doc" },
        { $pull: { Valeur: req.body.AnDelType_file } }
    );

    res.redirect('/Administrateur?ReussiType_file="Type Fichier Effacer"#type_file');
}
