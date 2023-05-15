const transporter = require("../helpers/transporterEmail");
const data = require("../data/data.json");

const sendWorkingEmail = async (req, res = response) => {
    try {
        let bodyAfter = {};

        Object.entries(req.body).forEach(([key, value]) => {
            if(value === null){
                bodyAfter = {...bodyAfter, [key]: "No completa" };
            }
            else if( value.length === 0 )
            {
                bodyAfter = {...bodyAfter, [key]: "No completa" };
            }
            else
            {
                bodyAfter = {...bodyAfter, [key]: value };
            }
        });
        
        const { name, email, phone, address, linkedin, repository, salary, technologies, experience, curriculum } = bodyAfter;

        await transporter().sendMail({
            from: email,
            to: data.email,
            subject: "Solicitud de empleo por la web",
            html: `<h2>Hola!</h2><h3>Tienes una nueva solicitud de trabajo de ${name}</h3><h3>Email: ${email}</h3><h3>Contacto: ${phone}</h3><h3>Localidad de residencia: ${address}</h3><h3>Linkedin: ${linkedin}</h3><h3>Link de repositorio: ${repository}</h3><h3>Expectativa salarial: ${salaryExpectation}</h3><h3>Tecnologías que maneja: ${technologies}</h3><h3>Breve reseña de su experiencia laboral:</h3><em><h3>${experience}</h3></em><b>Sertic - Soluciones Informáticas.</b>`,
            attachments: [
                {
                    filename: `Curriculum Vitae - ${name}.pdf`,
                    path: `./public/assets/curriculums/${curriculum}`
                }
            ]
        })
        console.log(`Se envio correctamente mail a ${data.email}`);

        return res.status(201).json({
            ok: true,
            msg: "Email enviado correctamente",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        ok: false,
        msg: "Error en controller Working Email.",
        });
    }
};

module.exports = sendWorkingEmail;