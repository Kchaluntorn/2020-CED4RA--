const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const session = require("express-session");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
        login: false,
    })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));

require("./routes/auth")(app);


const PORT = process.env.port || 7777;
app.listen(PORT, function(err) {
    if (!err) {
        console.log(`App Listen in http://localhost:${PORT}`);
    } else {
        console.log(`Can't Listen in http://localhost:${PORT} err ${err}`);
    }
});