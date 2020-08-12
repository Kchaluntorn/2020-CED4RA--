const csrf = require("csurf");
const bodyParser = require("body-parser");
const csrfProtect = csrf({ cookie: true });
const formParser = bodyParser.urlencoded({ extended: false });
const login = require("../controller/login");
const register = require("../controller/register");

module.exports = (app) => {
    app.get("/login", csrfProtect, login);
    app.post("/login", formParser, csrfProtect, login.postLogin);
    app.get("/register", csrfProtect, register);
    app.post("/register", formParser, csrfProtect, register.postRegister);
    app.get("/logout", (req, res) => {
        req.session.loggedin = false; // ให้ session loggedin = false
        req.session.username = ""; // ให้ session username = ""
        req.session.status = "";
        res.redirect("/login"); // เปิดหน้า index
    });
};