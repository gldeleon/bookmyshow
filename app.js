const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();


app.get("/api/v1/", (req, res) => {
    respuesta = {
        error: false,
        message: "bienvenido",
        data: null
    }
    res.json(respuesta)
})

app.get("/api/v1/login", (req, res) => {
    if(!req.usr || !req.pwd){
        respuesta = {
            error: true,
            message: "usuario y contraseña son requeridos"
        }
    }

    const user = {
        usr:req.usr,
        pwd:req.pwd
    }

    /*validamos que exista el user y pwd*/

    res.json(
        respuesta 
    )
})



app.listen(8000, function(){
    console.log("iniciado el server");
});