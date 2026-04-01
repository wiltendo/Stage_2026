const express = require("express");
const router = express.Router();
const ReprographeControleur = require("../controllers/ReprographeControleur");
const isAuth = require("../auth_middleware/authroutes");

router.get('/Reprographe',isAuth, ReprographeControleur.getReprographe);

router.post('/Reprographe/TicketTraitement',isAuth,ReprographeControleur.postTicketTraitement);
router.post('/Reprographe/TicketFermer',isAuth,ReprographeControleur.postTicketFermer);
router.post('/Reprographe/File',isAuth,ReprographeControleur.postTéléchargerFichier);

module.exports = router;