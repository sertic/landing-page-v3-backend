const express = require("express");
const cors = require("cors");
const WorkingEmail = require("./routes/working-email");
const MessageEmail = require("./routes/message-email");
const app = express();

app.use( express.static("public") );
app.use( express.json() );
app.use(cors());

app.use("/api/workingemail", WorkingEmail);
app.use("/api/messageemail", MessageEmail);

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});