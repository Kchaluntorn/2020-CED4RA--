const db = require("../db/connect");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const md5 = require("md5");

const register = (req, res) => {
  res.render("register", { csrfToken: req.csrfToken() });
};
const postRegister = (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const conpass = req.body.conpass;
  const gitname = req.body.gitname;
  const pass = req.body.pass;

  if (pass == conpass) {
    function hashPassword(password) {
      var salt = crypto.randomBytes(20).toString("base64");
      var iterations = 10000;

      var mykey = crypto.createCipher("aes-128-cbc", pass);
      var mystr = mykey.update("abc", "utf8", "hex");
      mystr += mykey.final("hex");

      var newpass = salt + mystr;
      return newpass;
    }
    const newpass = hashPassword(pass);

    db().query(
      "insert into user (username,email,password,status,name,surname,github) values (?,?,?,0,?,?,?)",
      [email, email, newpass, name, surname, gitname],
      (err, rs) => {
        if (err) {
          console.log(err);
        }
        res.redirect("/login");
      }
    );
  } else {
    res.redirect("/registerworng");
  }
};
module.exports = register;
module.exports.postRegister = postRegister;
