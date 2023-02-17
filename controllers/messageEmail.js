const transporter = require("../helpers/transporterEmail");

const sendMessageEmail = async (req, res = response) => {
    try {
        const { body } = req;

        console.log(body);

        // await transporter.sendMail({
        //     from: body.email,
        //     to: "soporte@sertic.com.ar",
        //     subject: "Solicitud de empleo por la web",
        //     html: ("<div><h1>Hola!</h1><p>Email de prueba</p></div>")
        // })

        return res.status(201).json({
            ok: true,
            msg: "Email enviado correctamente",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        ok: false,
        msg: "Error en controller Message Email.",
        });
    }
};

module.exports = sendMessageEmail;