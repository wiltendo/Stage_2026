const User = require('../model/dataUser');
const bcrypt = require('bcrypt');

apikey = "4e4c66acd3788ea5eba880259980ddee";
apisecret = "5783ad7b6a07d382642f8e0eb42d52ae"
const mailjet = require ('node-mailjet')
    .apiConnect(apikey,apisecret)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 


exports.postAuth = async (req,res,next) => {
    res.locals.log = req.session.isLog;
    console.log('middleware Authentification', req.method);

    const mdp = String(req.body.password)
    const Mail = String(req.body.Mail).trim().replace(/[<>$]/g, "");
      
    if (!emailRegex.test(Mail)) { 
        return res.redirect('/Auth?Erreur=Email invalide'); 
    }

    const user = await User.findOne({Mail: Mail},{Mdp:1,Role:1,_id:1});
    if (user){
        if (await bcrypt.compare(mdp,user.Mdp)){
            req.session.role = user.Role;
            req.session.user = user._id;
            
            req.session.isLog= true;
            return res.redirect('/');
        }else{
            return res.redirect('/Auth?Erreur=Mot de passe Incorrect')
        }
    }else{
        return res.redirect('/Auth?Erreur=Mail Incorrect')
    }
}

exports.postInscription= async (req,res,next) => {
    console.log('middleware Inscription', req.method);
    
    const Mail = String(req.body.Mail).trim().replace(/[<>$]/g, "");
    if(req.body.password != req.body.password_verif){
        console.log(req.body.password);
        console.log(req.body.password_verif);
        return res.redirect('/Inscription?Erreur=Verification Mot de passe Echoué')
    }

    if (!emailRegex.test(Mail)) { 
        return res.redirect('/Inscription?Erreur=Email invalide'); 
    }

    const existingUser = await User.findOne({ Mail: req.body.Mail });
    if (existingUser) {
        return res.redirect('/Inscription?Erreur=Email déjà utilisé');
    }

    const dep = String(req.body.Département)
    if(res.locals.Département.includes(dep)){
        try {
            await mailjet
            .post("send", {'version': 'v3.1'})
            .request({
                "Messages":[
                        {
                                "From": {
                                        "Email": "w1ltend0.gary@gmail.com",
                                        "Name": "Application Reprographe"
                                },
                                "To": [
                                        {
                                                "Email": req.body.Mail,
                                                "Name": req.body.name + " " + req.body.Prénom
                                        }
                                ],
                                "Subject": "Comfirmation Inscription Site Reprographie",
                                "HTMLPart": "Bonjour " + req.body.name +",<br><br>Votre compte a bien été créé sur notre plateforme.<br>Nous esperons que vous pourrez envoyer vos documents sans probléme.<br><br>Cordialement,<br>L'équipe Reprographie",
                        }
                ]
            })
            console.log("Mail ok")
        } catch (err) {
            console.log(err.statusCode);
            return res.redirect('/Inscription?Erreur='+err);
        }
        

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        
        const user = new User({Nom: req.body.name,Prénom: req.body.Prénom, Mail:req.body.Mail ,Mdp: hashedPassword, Département : req.body.Département, Role : "Utilisateur"});
        
        let savedUser;
        
        try {
            savedUser = await user.save();
            console.log("ok");
        } catch (err) {
            return res.redirect('/Inscription?Erreur=' + err);
        }

        req.session.role = "Utilisateur";
        req.session.user = savedUser._id;
        req.session.isLog = true;
        res.redirect('/');
    }else{
        res.redirect('/Inscription?Erreur=Département Inconnu')
    }
}