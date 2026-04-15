const Requete = require('../model/dataRequete');

exports.getReprographe = async (req,res,next) => {
    console.log('middleware Reprographe', req.method);
    const erreur = req.query.Erreur;
    const reussiT = req.query.ReussiT;
    const reussiF = req.query.ReussiF;
    const reussiFT = req.query.ReussiFT;

    res.render('Reprographe',{pageTitle:"Reprographe",ReussiT:reussiT,ReussiF:reussiF,ReussiFT:reussiFT,Erreur:erreur,listeRequeteOuvert: await Requete.find({Status:"Ouvert"}),listeRequeteTraitement:await Requete.find({Status:"En cours de traitement",Reprographe:req.session.user})});
}

exports.postTicketTraitement = async (req,res,next) => {
    console.log('middleware Reprographe TicketTraitement', req.method);

    const result = await Requete.updateOne(
        { _id: req.body.idTicket,Status:"Ouvert" },
        { $set: { Status: "En cours de traitement",Reprographe:req.session.user } }
    )
    res.redirect('/Reprographe?ReussiT=Le ticket a été pris en charge');
}

exports.postTicketFermer = async (req,res,next) => {
    console.log('middleware Reprographe TicketFermer', req.method);

    const result = await Requete.updateOne(
        { _id: req.body.idTicket,Status:"En cours de traitement" },
        { $set: { Status: "Complété"} }
    )
    res.redirect('/Reprographe?ReussiF=Le ticket a été fermé');
}

exports.postTéléchargerFichier = async (req,res,next) => {
    console.log('middleware Reprographe Télécharger Fichier ', req.method);

    const file = await Requete.findOne({ _id:req.body.idTicket },{Nom_Doc:1,Type_Doc:1,Position_Fichier:1})
    const path = file.Position_Fichier + req.body.idTicket + '.' + file.Type_Doc;
    const name = file.Nom_Doc + '.' + file.Type_Doc;
    res.download(path, name, (err) => {
        if (err) {
            console.error(err);
            return res.redirect('/Reprographe?Erreur=Fichier non trouvé');
        }
    });
}