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
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "Coloque un email valido").isEmail(),
        check("phone", "El telefono es obligatorio").not().isEmpty(),
        check("phone", "Coloque un telefono valido").isNumeric(),
        check("address", "La localidad es obligatoria").not().isEmpty(),
        check("phone", "El telefono es obligatorio").not().isEmpty(),
        check("linkedin", "El linkedin es obligatorio").not().isEmpty(),
        check("linkedin", "El linkedin debe ser una URL").isURL(),
        check("repository", "El repositorio debe ser una URL").optional({ checkFalsy: true }).isURL(),
        check("salary", "Coloque un salario valido").optional({ checkFalsy: true }).isNumeric(),
        check("experience", "El mensaje de experiencia laboral es obligatorio").not().isEmpty(),
        validErr,
    ],
    sendWorkingEmail
);

module.exports = router;