const port = 3000;
const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController")
const expressLayouts = require('express-ejs-layouts')

app.set("port", port);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts)
app.use(express.json());

app.use((req, res, next ) => {
    next();
});

app.get("", (req,res) => {
    res.render("index");
});

app.get("/home", (req,res) => {
    res.render("home");
});

app.get("/images/:images", (req,res) => {
    res.render("index");
});

app.listen(port);