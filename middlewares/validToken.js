const { response } = require("express");
const data = require("../data/data");
const axios = require("axios");

const validToken = async(req, res = response, next) => {
    const token = req.headers.authorization; 

    if(!token){
        console.log("Error!");
        console.log("ReCaptcha Token is missing!");
        return res.status(400).json({
            ok: false,
            msg: "ReCaptcha Token is missing!",
        });
    }

    try {
        const verifyUrl = `${data.reCAPTCHA.verify_url}?secret=${data.reCAPTCHA.secret_key}&response=${token}`;
        const resp = await axios.post( verifyUrl );
        const respData = resp.data;
        const { success } = respData;
        
        if(success){
            next();
        }
        else{
            console.log("Error!");
            console.log("Invalid Captcha");
            return res.status(400).json({
                ok: false,
                msg: "Invalid Captcha",
            });
        }

    } catch (error) {
        console.log("Error!");
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: error,
        });
    }
};

module.exports = {
    validToken,
};