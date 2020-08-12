const express = require("express");
const csrf = require("csurf");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const csrfProtect = csrf({ cookie: true });
const formParser = bodyParser.urlencoded({ extended: false });

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    login: false,
  })
);

const auth = require("./routes/auth");

app.use(bodyParser.json()); // ให้req ใช้งาน json
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));

app.use(cookieParser());

require("./routes/auth")(app);
require("./routes/home")(app);
require("./routes/test")(app);

app.listen(7777, function (err) {
  if (!err) {
    console.log("localhost:7777");
  } else {
    console.log(err);
  }
});
