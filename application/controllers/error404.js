exports.getError404 = (req,res,next) => {
    res.locals.log = req.session.isLog;
    res.status(404).render('404',{ pageTitle: 'Not Found'});
}