const db = require("../db/connect");

module.exports = (app) => {
  app.get("/index", (req, res) => {
    if (req.session.loggedin == true) {
      db().query("select * from user where status=?", [0], (err, rs) => {
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
  app.post("/editProfile", function (req, res) {
    if (req.session.loggedin == true) {
      const data = req.body;
      console.log(data);
      db().query(
        "update user set name = ?,surname = ?,github = ? where id = ?",
        [data.name, data.surname, data.github, data.id],
        (err, rs) => {
          if (!err) {
            console.log(rs);
            const qt = `select * from user where id = ${data.id}`;
            db().query(qt, (err, rs) => {
              res.render("edit", { rs: rs[0], ms: "Update successfully" });
            });
          } else {
            console.log(err);
            return;
          }
        }
      );
    } else {
      res.redirect("/login");
    }
  });
  app.post("/view", (req, res) => {
    const id = req.body.id;
    db().query("select * from user where id = ?", [id], (err, rs) => {
      if (err) {
        console.log(err);
      }
      res.render("profile", { rs: rs[0] });
    });
  });

  app.post("/edit", function (req, res) {
    if (req.session.loggedin == true) {
      const id = req.body.id;
      db().query(
        "select id,name,surname,github from user where id = ?",
        [id],
        (err, rs) => {
          if (err) {
            console.log(err);
            return;
          }

          res.render("edit", { rs: rs[0], ms: "" });
        }
      );
    } else {
      res.redirect("/login");
    }
  });
};
