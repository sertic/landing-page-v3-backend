const transporter = require("../helpers/transporterEmail");

const sendMessageEmail = async (req, res = response) => {
    try {
        const { name, email, phone, message } = req.body;

        await transporter().sendMail({
            from: body.email,
            to: "alesandro.lalli@gmail.com",
            subject: "Solicitud de empleo por la web",
            html: (`<h2>Hola!</h2><h3>Tienes un nuevo mensaje de ${name}</h3><h3>Email: ${email}</h3><h3>Contacto: ${phone}</h3><em><h3>${message}</h3></em><b>Sertic - Soluciones Informáticas.</b>`)
        })

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