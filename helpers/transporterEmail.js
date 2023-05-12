const nodemailer = require("nodemailer");
const data = require("../data/data.json");

const getTransporter = () => {
    return nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: data.email,
            pass: "teyzbhjjxfxwfhgr" //TODO: pedir pass a Pancho
        }
    })
};

module.exports = getTransporter;