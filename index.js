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

app.get("/home", homeController.sendReqParam);
app.get("/images/:imageNumber", homeController.sendReqParam);

`
app.get("", (req,res) => {
    res.redirect("/home");
});

app.get("/home", (req,res) => {
    res.render("home");
});

`

app.listen(port);