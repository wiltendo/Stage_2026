const User = require('../model/dataUser');


exports.postAuth = async (req,res,next) => {
    res.locals.log = req.session.isLog;
    console.log('middleware Authentification', req.method);
    console.log(req.body.Mail);
    console.log(req.body.password);


    
    console.log(await User.find({Mail: req.body.Mail,Mdp:req.body.password}))
    console.log(await User.countDocuments({Mail: req.body.Mail,Mdp:req.body.password}))
    console.log(await User.countDocuments({Mail: req.body.Mail,Mdp:req.body.password}) == 1)
    if (await User.countDocuments({Mail: req.body.Mail,Mdp:req.body.password}) == 1){
        req.session.isLog=true;
        const user = await User.findOne({Mail: req.body.Mail,Mdp:req.body.password},{Role:1,_id:1})
        req.session.role = user.Role;
        req.session.user = user._id;
        
        res.redirect('/');
    }else{
        res.redirect('/Auth')
    }
}

exports.postInscription= async (req,res,next) => {
    console.log('middleware Inscription', req.method);

    req.session.isLog=true;
    console.log('log session',req.session.isLog);
    

    const user = new User({Nom: req.body.name,Prénom: req.body.Prénom, Mail:req.body.Mail ,Mdp: req.body.password, Département : req.body.Département, Role : "Utilisateur"});
    user.save()
        .then((result) => { console.log("ok")})
        .catch((err) => {console.log(err)});

    req.session.role = "Utilisateur";
    req.session.user = await User.countDocuments();
    res.redirect('/');
}