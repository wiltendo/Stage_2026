module.exports = (req, res, next) => {
    if (req.session.role != "Administrateur") {
        return res.redirect('/');
    }
    next();
}