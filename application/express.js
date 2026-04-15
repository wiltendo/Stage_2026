const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const csrf = require("csurf");


const error404 = require('./controllers/error404');
const AccueilRoutes = require('./routes/Accueil');
const AuthRoutes = require('./routes/Authentification');
const logoutRoutes = require('./routes/logout');
const FormulaireRoutes = require('./routes/User');
const ReprographeRoutes = require('./routes/Reprographe');
const AdministrateurRoutes = require('./routes/Administrateur');


mongoose.connect('mongodb://localhost:27017/Reprographe')
    .then((result)=>{
        console.log("connexion serveur Mongo réussie");
    } ).catch(err=>{
    console.log("erreur de connexion");
})

app.listen(port, () => {
    console.log("Server Express est à l'écoute sur le port : " + port);
})

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret: 'secret',resave: false, saveUninitialized: false}));

const csrfProtected = csrf({});
console.log(csrfProtected);
app.use(csrfProtected);

const fileUpload = require('express-fileupload');
app.use(fileUpload());

const Annexe = require('./model/dataAnnexe');

app.use(async function(req, res, next) {
    res.locals.log = req.session.isLog;
    res.locals.role = req.session.role;
    const dep = await Annexe.find({},{Valeur:1})
    res.locals.Département =  dep[0].Valeur;
    res.locals.Type_Document = dep[1].Valeur;
    console.log(req.session.role)

    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use(AuthRoutes);
app.use(logoutRoutes);
app.use(FormulaireRoutes);
app.use(ReprographeRoutes);
app.use(AdministrateurRoutes);

app.use(AccueilRoutes);

app.use(error404.getError404);