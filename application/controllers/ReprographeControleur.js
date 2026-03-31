const Requete = require('../model/dataRequete');

exports.getReprographe = async (req,res,next) => {
    console.log('middleware Reprographe', req.method);

    res.render('Reprographe',{pageTitle:"Reprographe",listeRequeteOuvert: await Requete.find({Status:"Ouvert"}),listeRequeteTraitement:await Requete.find({Status:"En cours de traitement",Reprographe:req.session.user})});
}

exports.postTicketTraitement = async (req,res,next) => {
    console.log('middleware Reprographe TicketTraitement', req.method);

    const result = await Requete.updateOne(
        { _id: req.body.idTicket,Status:"Ouvert" },
        { $set: { Status: "En cours de traitement",Reprographe:req.session.user } }
    )
    res.redirect('/Reprographe');
}

exports.postTicketFermer = async (req,res,next) => {
    console.log('middleware Reprographe TicketFermer', req.method);

    const result = await Requete.updateOne(
        { _id: req.body.idTicket,Status:"En cours de traitement" },
        { $set: { Status: "Complété"} }
    )
    res.redirect('/Reprographe');
}