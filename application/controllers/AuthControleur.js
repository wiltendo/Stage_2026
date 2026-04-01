const User = require('../model/dataUser');
const bcrypt = require('bcrypt');

exports.postAuth = async (req,res,next) => {
    res.locals.log = req.session.isLog;
    console.log('middleware Authentification', req.method);

   
    const user = await User.findOne({Mail: req.body.Mail});
    if (await User.countDocuments({Mail: req.body.Mail}) == 1){
        if (await bcrypt.compare(req.body.password,user.Mdp)){
            req.session.isLog=true;
            const user = await User.findOne({Mail: req.body.Mail},{Role:1,_id:1})
            req.session.role = user.Role;
            req.session.user = user._id;
            
            res.redirect('/');
        }else{
            res.redirect('/Auth?Erreur="Mot de passe Incorrect"')
        }
    }else{
        res.redirect('/Auth?Erreur="Mail Incorrect"')
    }
}

exports.postInscription= async (req,res,next) => {
    console.log('middleware Inscription', req.method);

    if(res.locals.Département.includes(req.body.Département)){
        req.session.isLog=true;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const user = new User({Nom: req.body.name,Prénom: req.body.Prénom, Mail:req.body.Mail ,Mdp: hashedPassword, Département : req.body.Département, Role : "Utilisateur"});
        user.save()
            .then((result) => { console.log("ok")})
            .catch((err) => {res.redirect('/Inscription?Erreur='+err)});

        req.session.role = "Utilisateur";
        req.session.user = user._id;
        res.redirect('/');
    }else{
        res.redirect('/Inscription?Erreur="Département Inconnu"')
    }
}
