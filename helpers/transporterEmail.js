const nodemailer = require("nodemailer");

const getTransporter = () => {
    return nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: "alesandro.lalli@gmail.com",
            pass: "teyzbhjjxfxwfhgr"
        }
    })
};

module.exports = getTransporter;