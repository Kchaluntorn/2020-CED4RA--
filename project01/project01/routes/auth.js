const login = require("../controller/login");
const register = require("../controller/register");

module.exports = (app) => {
  app.get("/login", login);
  app.post("/login", login.postLogin);
  app.get("/register", register);
  app.post("/register", register.postRegister);
};
