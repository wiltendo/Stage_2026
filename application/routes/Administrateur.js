const express = require("express");
const router = express.Router();
const AdministrateurControleur = require("../controllers/AdministrateurControleur");



router.get('/Administrateur',AdministrateurControleur.getAdministrateur)

module.exports = router;