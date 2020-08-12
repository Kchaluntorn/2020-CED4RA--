const express = require("express"); //เรียกโมดูล express
const app = express(); // ให้ตัวแปลapp เรียกใช้งานmodule express
const bodyParser = require("body-parser"); //เรียกโมดูล body-parser module ที่ไว้รับ req body
const path = require("path");
const session = require("express-session"); // เรียก module express session
var fileupload = require("express-fileupload"); // เรียก module file upload

const csrf = require("csurf");
const fromParser = bodyParser.urlencoded({ extended: false });

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

app.listen(7777, function (err) {
  if (!err) {
    console.log("localhost:7777");
  } else {
    console.log(err);
  }
});
