
const { Router } = require("express");
const router = Router();
//const URL = "/api/v1";
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res, next) => {
    var user = req.params.usr;

    try{
        const mov = await db.query('select * from movies');    
        
    }catch(error){
        console.log(erro);
    }    
    

    if(!req.usr || !req.pwd){
        respuesta = {
            error: true,
            message: "usuario y contraseña son requeridos"
        }
    }

    respuesta = {
        error: false,
        message: "consulta correcta",
        data: mov.rows
    }        
    //validamos que exista el user y pwd

    res.json(
        respuesta 
    )
})

module.exports = router;