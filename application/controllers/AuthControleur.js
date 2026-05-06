const User = require('../model/dataUser');
const bcrypt = require('bcrypt');

apikey = "4e4c66acd3788ea5eba880259980ddee";
apisecret = "5783ad7b6a07d382642f8e0eb42d52ae"
const mailjet = require ('node-mailjet')
    .apiConnect(apikey,apisecret)


exports.postAuth = async (req,res,next) => {
    res.locals.log = req.session.isLog;
    console.log('middleware Authentification', req.method);

    const mdp = String(req.body.password)
    const mail = String(req.body.Mail);
    const user = await User.findOne({Mail: mail},{Mdp:1,Role:1,_id:1});
    if (user){
        if (await bcrypt.compare(mdp,user.Mdp)){
            req.session.isLog=true;
            req.session.role = user.Role;
            req.session.user = user._id;
                
            return res.redirect('/');
        }else{
            return res.redirect('/Auth?Erreur="Mot de passe Incorrect"')
        }
    }else{
        return res.redirect('/Auth?Erreur="Mail Incorrect"')
    }
}

exports.postInscription= async (req,res,next) => {
    console.log('middleware Inscription', req.method);

    if(res.locals.Département.includes(req.body.Département)){
        const request = mailjet
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
        request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode);
                return res.redirect('/Inscription?Erreur='+err);
            })
        req.session.isLog=true;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const user = new User({Nom: req.body.name,Prénom: req.body.Prénom, Mail:req.body.Mail ,Mdp: hashedPassword, Département : req.body.Département, Role : "Utilisateur"});
        user.save()
            .then((result) => { console.log("ok")})
            .catch((err) => {return res.redirect('/Inscription?Erreur='+err)});

        req.session.role = "Utilisateur";
        req.session.user = user._id;
        res.redirect('/');
    }else{
        res.redirect('/Inscription?Erreur="Département Inconnu"')
    }
}