/*
Email
host + /api/working-email
*/

const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();
const sendWorkingEmail = require("../controllers/workingEmail");
const { validErr } = require("../middlewares/validErr");

router.post(
    "",
    [
        check("name", "El usuario es obligatorio").not().isEmpty(),
        check("email", "Coloque un email valido").isEmail(),
        check("phone", "Coloque un telefono valido").isNumeric(),
        check("address", "La localidad es obligatoria").not().isEmpty(),
        check("linkedin", "El postId es obligatorio").isURL(),
        check("repository", "El postId es obligatorio").isURL(),
        check("salary", "El postId es obligatorio").isNumeric(),
        check("technologies", "El postId es obligatorio").isString(),
        check("experience", "El mensaje de experiencia laboral es obligatorio").not().isEmpty(),
        validErr,
    ],
    sendWorkingEmail
);

module.exports = router;