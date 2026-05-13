module.exports = (req, res, next) => {
    if (req.session.role != "Utilisateur") {
        return res.redirect('/');
    }
    next();
}
