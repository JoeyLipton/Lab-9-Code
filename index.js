const port = 3000;
const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController")

app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

