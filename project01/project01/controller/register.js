const db = require("../db/connect");

const register = (req, res) => {
  res.send("register");
};
const postRegister = (req, res) => {
  const name = req.body.name;
  const surname = req.surname.surname;
  const email = req.body.email;
  const conpass = req.body.compass;
  const gitname = req.body.gitname;
  const pass = req.body.pass;

  if (pass != conpass) {
    res.render("Register", {
      massage: "Password and ConfirmPassword not match",
    });
  } else {
    function hashPassword(password) {
      var salt = crypto.randomBytes(128).toString("base64");
      var iterations = 10000;
      var newpass = salt + "$" + password + "iloveis";
      return newpass;
    }
    const newpass = hashPassword(pass);
    console.log(newpass);
    // const qt = `insert into user () values ()`;
    // db().query(qt, (err, rs) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   res.redirect("/login");
    // });
  }
};
module.exports = register;
module.exports.postRegister = postRegister;
