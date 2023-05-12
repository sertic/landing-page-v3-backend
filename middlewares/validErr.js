const { response } = require("express");
const { validationResult } = require("express-validator");

const validErr = (req, res = response, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log("Error!");
        console.log(err.mapped());
        
        return res.status(400).json({
            ok: false,
            errors: err.mapped(),
        });
    }

    next();
};

module.exports = {
    validErr,
};