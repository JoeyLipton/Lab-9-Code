const path = require("path");

exports.sendReqParam = (req, res) => {
    switch (req.params.page) {
        
        case 'arch' :
            res.sendFile(path.join(__dirname, "../public/images/arch.png"));
            break;
        case 'deb' :
            res.sendFile(path.join(__dirname, "../public/images/deb.png"));
            break;
        case 'rhel' :
            res.sendFile(path.join(__dirname, "../public/images/rhel.png"));
            break;
        default :
            res.render("index", {
                name: "home"
            });
            break;
    };
};