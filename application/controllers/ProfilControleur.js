const User = require('../model/dataUser');
const bcrypt = require('bcrypt');

exports.getProfil = async (req,res,next) => {
    console.log('middleware Profil ', req.method);
    const user = await User.findOne({_id: req.session.user},{Nom:1,Prénom:1,Mail:1,Département:1});
    const erreur = req.query.Erreur;
    const reussi = req.query.Reussi;

    res.render('Profil',{pageTitle:"Profil",User:user,Role:req.session.role,Reussi:reussi,Erreur:erreur});
}

exports.postMdpChange = async (req,res,next) =>{
    console.log('middleware Profil ChangeMDP ', req.method);

    const mdpA = String(req.body.passwordA)
    const mdpN = String(req.body.passwordN)
    const mdpN_verif = String(req.body.passwordN_verif)

    if( mdpN!= mdpN_verif){
        return res.redirect('/Profil?Erreur=Verification Mot de passe Echoué')
    }

    const user = await User.findOne({_id: req.session.user},{Mdp:1});
    if (user){
        if (await bcrypt.compare(mdpA,user.Mdp)){
            const hashedPassword = await bcrypt.hash(mdpN, 12);
    
            try { 
                const result = await User.updateOne(
                    { _id: req.session.user,Mdp:user.Mdp},
                    { $set: {Mdp:hashedPassword } }
                )             
            } catch (err){
                console.log(err.statusCode);
                return res.redirect('/Profil?Erreur='+err);
            }
            
            return res.redirect('/Profil?Reussi=Changement effectuer');

        }else{
            return res.redirect('/Profil?Erreur=Ancien Mot de passe Incorrect')
        }
    }else{
        return res.redirect('/Profil?Erreur=User Erreur')
    }
}