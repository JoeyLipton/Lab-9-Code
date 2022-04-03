const path = require("path");

exports.sendReqParam = (req, res) => {
    switch (req.params.page) {
        case 'arch' :
            res.sendFile(path.join(__dirname, "../views/arch.html"));
            break;
        case 'deb' :
            res.sendFile(path.join(__dirname, "../views/deb.html"));
            break;
        case 'rhel' :
            res.sendFile(path.join(__dirname, "../views/rhel.html"));
            break;
        default :
            res.render("index", {
                name: "home"
            });
            break;
    };
};