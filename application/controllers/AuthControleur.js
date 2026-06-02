const User = require('../model/dataUser');
const bcrypt = require('bcrypt');
const axios = require("axios");

apikey = "4e4c66acd3788ea5eba880259980ddee";
apisecret = "5783ad7b6a07d382642f8e0eb42d52ae"
const mailjet = require ('node-mailjet')
    .apiConnect(apikey,apisecret)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 


exports.postAuth = async (req,res,next) => {
    try {
        const recaptchaResponse = req.body["g-recaptcha-response"];
        if (!recaptchaResponse) return res.redirect("/Auth?Erreur=Veillez completer le reCAPTCHA");
        const verification = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
            params: {
            secret: "6Lfl9QgtAAAAALKoN0bhAcfEi9ltVpRzG_hCZ0rg",
            response: recaptchaResponse,
            remoteip: req.ip,
            },
        }
        );
        if (!verification.data.success) return res.redirect("/Auth??Erreur=reCAPTCHA échoué. Veillez réessaiyer.");

    } catch (error) {
        console.log(error);
        res.render("home", { error: error.message || "INTERNAL SERVER ERROR" })
    }

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

    try {
        const recaptchaResponse = req.body["g-recaptcha-response"];
        if (!recaptchaResponse) return res.redirect("/Inscription?Erreur=Veillez completer le reCAPTCHA");
        const verification = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
            params: {
            secret: "6Lfl9QgtAAAAALKoN0bhAcfEi9ltVpRzG_hCZ0rg",
            response: recaptchaResponse,
            remoteip: req.ip,
            },
        }
        );
        if (!verification.data.success) return res.redirect("/Inscription?Erreur=reCAPTCHA échoué. Veillez réessaiyer.");

    } catch (error) {
        console.log(error);
        res.render("home", { error: error.message || "INTERNAL SERVER ERROR" })
    }
    
    const Mail = String(req.body.Mail).trim().replace(/[<>$]/g, "");
    if(req.body.password != req.body.password_verif){

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
                                "Subject": "Confirmation Inscription Site Reprographie",
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

exports.postMDPForgottent = async (req,res,next) => {
    console.log('middleware MDP Forgottent ', req.method);
    console.log(req.body.Mail_recup);

    try {
        const recaptchaResponse = req.body["g-recaptcha-response"];
        if (!recaptchaResponse) return res.redirect("/Auth??Erreur=Veillez completer le reCAPTCHA");
        const verification = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
            params: {
            secret: "6Lfl9QgtAAAAALKoN0bhAcfEi9ltVpRzG_hCZ0rg",
            response: recaptchaResponse,
            remoteip: req.ip,
            },
        }
        );
        if (!verification.data.success) return res.redirect("/Auth??Erreur=reCAPTCHA échoué. Veillez réessaiyer.");

    } catch (error) {
        console.log(error);
        res.render("home", { error: error.message || "INTERNAL SERVER ERROR" })
    }

    const Mail = String(req.body.Mail_recup).trim().replace(/[<>$]/g, "");

    if (!emailRegex.test(Mail)) { 
        return res.redirect('/Auth?Erreur=Email invalide'); 
    }

    const existingUser = await User.findOne({ Mail: Mail },{Nom:1,Prénom:1,_id:1});
    if (!existingUser) {
        return res.redirect('/Auth?Erreur=Email Inconnu');
    }

    

    const password = Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + existingUser.Nom + "" + Math.floor(Math.random() * 10) + "-" +Math.floor(Math.random() * 10) + "" + existingUser.Prénom + "" + Math.floor(Math.random() * 10) + "" +Math.floor(Math.random() * 10);


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
                                            "Email": Mail,
                                            "Name": existingUser.Nom  + " " + existingUser.Prénom
                                    }
                            ],
                            "Subject": "Réinitialisation du mot de passe - Site Reprographie",
                            "HTMLPart": 
                                "Bonjour " + existingUser.Nom + ",<br><br>" +
                                "Suite à votre demande de réinitialisation de mot de passe, celui-ci a été modifié.<br>" +
                                "Votre nouveau mot de passe est : <b>" + password + "</b><br><br>" +
                                "Cordialement,<br>L'équipe Reprographie",
                    }
            ]
        })
        console.log("Mail ok")
    } catch (err) {
        console.log(err.statusCode);
        return res.redirect('/Auth?Erreur='+err);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    try { 
        const result = await User.updateOne(
            { _id: existingUser._id,Mail:req.body.Mail},
            { $set: {Mdp:hashedPassword } }
        ) 
    } catch (err){
        console.log(err.statusCode);
        return res.redirect('/Auth?Erreur='+err);
    }

    res.redirect('/Auth?Reussi=Email de récupération envoyé');
}
