const express = require("express");
const router = express.Router();
const AdministrateurControleur = require("../controllers/AdministrateurControleur");
const isAuth = require("../auth_middleware/authroutes");
const isAdmin = require("../auth_middleware/adminroutes");

router.get('/Administrateur',isAuth,isAdmin,AdministrateurControleur.getAdministrateur);

router.post('/Administrateur/Reprographe',isAuth,isAdmin,AdministrateurControleur.postAddReprographe);

router.post('/Administrateur/AddDep',isAuth,isAdmin,AdministrateurControleur.postAddDep);
router.post('/Administrateur/ModDep',isAuth,isAdmin,AdministrateurControleur.postModDep);
router.post('/Administrateur/DelDep',isAuth,isAdmin,AdministrateurControleur.postDelDep);

router.post('/Administrateur/AddType_file',isAuth,isAdmin,AdministrateurControleur.postAddType_file);
router.post('/Administrateur/ModType_file',isAuth,isAdmin,AdministrateurControleur.postModType_file);
router.post('/Administrateur/DelType_file',isAuth,isAdmin,AdministrateurControleur.postDelType_file);



module.exports = router;