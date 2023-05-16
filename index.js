const express = require("express");
const cors = require("cors");
const WorkingEmail = require("./routes/working-email");
const MessageEmail = require("./routes/message-email");
const { validToken } = require("./middlewares/validToken");
const multer = require("multer");
const bodyParser = require('body-parser');
const app = express();


app.use( express.static("public") );
app.use( express.json() );
app.use( cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    filename: (res, file, cb) => {
        const ext = file.originalname.split(".").pop(); //recorto la extension
        const fileName = Date.now()+Math.random(); // 123123123213
        cb(null, `${fileName}.${ext}`); // 123123123213.pdf 
    },
    destination: (res, file, cb) => {
        cb(null, './public/assets/curriculums');
    }
});

const upload = multer({storage});

app.use("/api/workingemail", WorkingEmail);
app.use("/api/messageemail", MessageEmail);

app.post("/api/uploadfile", validToken, upload.single("Curriculum"), (req,res) => {

    res.status(200).json({
        ok: true,
        msg: "Archivo guardado",
        fileName: req.file.filename
    });
});

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});