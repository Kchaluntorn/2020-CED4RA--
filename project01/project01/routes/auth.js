const login = require("../controller/login");
const express = require("express");
const router = express.Router();

router.get("/login", login);
router.post("/login", login.postLogin);
router.get("/register");
router.post("/register");

module.exports = router;
