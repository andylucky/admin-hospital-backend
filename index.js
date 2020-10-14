const express = require("express");
const { dbConnection } = require("./database/config")
const cors = require('cors');

//busca un archivo con la extension .env y lo establece
//en las varialbes de entorno de node.
require('dotenv').config();

//crear servidor express
//Users zapa
//pass  N5fnTebMD1ycJpCb

const app = express();

//configurar cors
app.use(cors());

dbConnection();


app.get("/", (req, resp) => {
    resp.json({
        ok: true,
        msg: "hola mundo"
    })
})


app.listen(process.env.PORT, () => console.log("servidor corriendo en puerto" + process.env.PORT));