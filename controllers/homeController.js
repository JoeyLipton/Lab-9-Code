const path = require("path");

exports.sendReqParam = (req, res) => {
    let imageNumber = req.params.imageNumber;
    switch (req.params.imageNumber) {
        case '1' :
            res.render("1");
            break;
        case '2' :
            res.render("2");
            break;
        case '3' :
            res.render("3");
            break;
        default :
            res.render("index", {
                name: "home"
            });
            break;
    };
};
