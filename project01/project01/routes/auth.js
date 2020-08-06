const login = require("../controller/login")
const register = require("../controller/register")

module.exports = (app) => {
    app.get("/login", login);
    app.post("/login");
    app.get("/register");
    app.post("/register");
};