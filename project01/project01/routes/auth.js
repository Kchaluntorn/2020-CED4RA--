const login = require("../controller/login")

module.exports = (app) => {
    app.get("/login", login);
    app.post("/login", function(req, res) {
        console.log(req.body.user)
    });
    app.get("/register");
    app.post("/register");
};