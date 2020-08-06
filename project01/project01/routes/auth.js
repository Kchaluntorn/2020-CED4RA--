const login = require("../controller/login")

module.exports = (app) => {
    app.get("/login", login);
    app.post("/login");
    app.get("/register");
    app.post("/register");
};