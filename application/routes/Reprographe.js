const express = require("express");
const router = express.Router();
const ReprographeControleur = require("../controllers/ReprographeControleur");

router.get('/Reprographe', ReprographeControleur.getReprographe);

router.post('/Reprographe/TicketTraitement',ReprographeControleur.postTicketTraitement);

router.post('/Reprographe/TicketFermer',ReprographeControleur.postTicketFermer);


module.exports = router;