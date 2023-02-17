const nodemailer = require("nodemailer");

const getTransporter = () => {
    return nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: "contacto@sertic.com.ar",
            pass: "yuwwgzftiqpswigt"
        }
    })
};

module.exports = getTransporter;