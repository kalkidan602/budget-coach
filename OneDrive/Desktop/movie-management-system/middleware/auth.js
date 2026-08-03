function isLoggedIn(req, res, next) {
  if (req.session.userId) {
    return next();
  }

  res.redirect("/users/login");
}

module.exports = isLoggedIn;