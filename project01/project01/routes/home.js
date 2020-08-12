const db = require("../db/connect");

module.exports = (app) => {
  app.get("/index", (req, res) => {
    if (req.session.loggedin == true) {
      const qt = "select * from user where status=0";
      db().query(qt, (err, rs) => {
        if (err) {
          console.log(err);
        }
        console.log(rs);
        res.render("datacenter", {
          name: req.session.name,
          rs: rs,
          status: req.session.status,
        });
      });
    } else {
      res.redirect("/login");
    }
  });
  app.post("/editProfile");
  app.post("/saveEdit");
};
