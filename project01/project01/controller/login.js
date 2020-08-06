const db = require("../db/connect");

const login = (req, res) => {
  res.send("login");
};

const postLogin = (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  const qs = `select username password from user where username = '${username}' and password = '${password}'`;
  db().query(qs, (err, rs) => {
    if (err) {
      console.log(qs);
      console.log(err);
      return;
    }
    if (rs.length > 0) {
      res.json("login โวย");
    } else {
      res.json(qs);
    }
  });
};

module.exports = login;
module.exports.postLogin = postLogin;
