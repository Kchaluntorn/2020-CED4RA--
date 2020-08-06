const express = require("express");
const mysql = require("mysql");

const db = () => {
  return mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "",
      database: "usertable",
    },
    console.log("connect success")
  );
};
module.exports = db;
