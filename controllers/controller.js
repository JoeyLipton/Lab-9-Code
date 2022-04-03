const path = require("path");

exports.sendHome = (req, res) => {
    res.redirect("home");
}

exports.sendIndex = (req, res) => {
    res.render("index");
}

exports.sendImage = (req, res) => {
    let image = req.params.image;
    res.render(image);
}