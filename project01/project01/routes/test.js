const express = require("express");
const app = express.Router();
const csrf = require("csurf");
const bodyParser = require("body-parser");
const csrfProtect = csrf({ cookie: true });
const formParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get("/test", csrfProtect, function (req, res) {
    console.log("Token to Browser/form: " + req.csrfToken());
    res.render("form", { csrfToken: req.csrfToken() });
  });

  app.post("/test/response", formParser, csrfProtect, function (req, res) {
    console.log("Token from Browser/form1: " + req.body._csrf);
    // console.log(req.body);
    res.send("data is authenticated");
  });
};
