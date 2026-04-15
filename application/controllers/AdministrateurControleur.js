const User = require('../model/dataUser');
const Annexe = require('../model/dataAnnexe');

const bcrypt = require('bcrypt');


exports.getAdministrateur = (req,res,next) => {
    console.log('middleware Administrateur', req.method);
    const erreurR = req.query.ErreurR;
    const reussiDep = req.query.ReussiDep;
    const reussiRep = req.query.ReussiRep;
        
    res.render('Administrateur',{pageTitle:"Administrateur",ErreurR:erreurR,ReussiDep:reussiDep,ReussiRep:reussiRep}); 
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

