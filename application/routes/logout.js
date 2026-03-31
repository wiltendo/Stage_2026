const express = require("express");
const router = express.Router();

router.get('/out', (req, res, next) => {
    if (req.session.isLog) {
        req.session.destroy();
        res.redirect("/");
    }
});

module.exports = router;