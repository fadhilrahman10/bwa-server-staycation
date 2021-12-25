const isLogin = (req, res, next) => {
  if (req.session.user === null || req.session.user === undefined) {
    res.redirect("/admin/signin");
    req.flash("alertMessage", "Please Login again...");
    req.flash("alertStatus", "warning");
    res.redirect("/admin/signin");
  } else {
    next();
  }
};

module.exports = isLogin;
