const login = require("../controller/login");
const register = require("../controller/register");

module.exports = (app) => {
  app.get("/login", login);
  app.post("/login", login.postLogin);
  app.get("/register", register);
  app.post("/register", register.postRegister);
  app.get("/logout", (req, res) => {
    req.session.loggedin = false; // ให้ session loggedin = false
    req.session.username = ""; // ให้ session username = ""
    res.redirect("/login"); // เปิดหน้า index
  });
};
