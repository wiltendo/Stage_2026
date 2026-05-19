const express = require("express");
const router = express.Router();

const ProfilControleur = require("../controllers/ProfilControleur");
const isAuth = require("../auth_middleware/authroutes");

router.get('/Profil',isAuth,ProfilControleur.getProfil);
router.post('/MdpChange',isAuth,ProfilControleur.postMdpChange)

module.exports = router;