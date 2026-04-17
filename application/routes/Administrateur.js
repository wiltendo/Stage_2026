const express = require("express");
const router = express.Router();
const AdministrateurControleur = require("../controllers/AdministrateurControleur");
const isAuth = require("../auth_middleware/authroutes");

router.get('/Administrateur',isAuth,AdministrateurControleur.getAdministrateur);

router.post('/Administrateur/Reprographe',isAuth,AdministrateurControleur.postAddReprographe);

router.post('/Administrateur/AddDep',isAuth,AdministrateurControleur.postAddDep);
router.post('/Administrateur/ModDep',isAuth,AdministrateurControleur.postModDep);
router.post('/Administrateur/DelDep',isAuth,AdministrateurControleur.postDelDep);

router.post('/Administrateur/AddType_file',isAuth,AdministrateurControleur.postAddType_file);
router.post('/Administrateur/ModType_file',isAuth,AdministrateurControleur.postModType_file);
router.post('/Administrateur/DelType_file',isAuth,AdministrateurControleur.postDelType_file);



module.exports = router;