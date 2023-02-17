/*
Email
host + /api/message-email
*/

const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();
const sendMessageEmail = require("../controllers/messageEmail");
const { validErr } = require("../middlewares/validErr");

router.post(
    "",
    [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Coloque un email valido").isEmail(),
        check("email", "El email es obligatorio").not().isEmpty(),
        check("message", "El mensaje es obligatorio").not().isEmpty(),
        validErr,
    ],
    sendMessageEmail
);

module.exports = router;