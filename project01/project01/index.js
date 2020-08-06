const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const auth = require("./routes/auth");
const app = express();

app.use(bodyParser.json()); // ให้req ใช้งาน json
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
require("./routes/auth")(app);


app.listen(7777, function(err) {
    if (!err) {
        console.log("localhost:7777");
    } else {
        console.log(err);
    }
});