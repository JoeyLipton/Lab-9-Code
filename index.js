const port = 3000;
const express = require("express"),
    app = express(),
    controller = require("./controllers/controller")

app.set("port", port);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", controller.sendIndex);
app.get("/home", controller.sendIndex);
app.get("/images/:image", controller.sendImage);

app.listen(port);