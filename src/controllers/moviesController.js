
//Library
//const { config } = require("dotenv");
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const db = require('../db/database');
const config = require('../../config');

//app.use(express.json());

//App
//const app = express();
const URL = "/api/v1";

router.get(URL + "/movies", async (req, res) => {
    try{
        const mov = 'select * from movies';
        const result = await db.query(mov)
        var respuesta = {
            error: false,
            message: "consulta correcta",
            data: result.rows
        }        
    }catch(error){
        console.log(error);
    }    
    res.json(respuesta);
})

router.get(URL + "/movies/:city", async (req, res) => {
    var city = req.params.city;    
    try{
        const mov = "select * from movies where movie_city = $1";    
        const val = [city];
        const result = await db.query(mov, val);
        console.log(result);
        var respuesta = {
            error: false,
            message: "consulta correcta",
            data: result.rows
        }        
    }catch(error){
        console.log(erro);
    }    
    res.json(respuesta)
})

/*cambiar a post*/
router.post(URL + "/movies/buy", async (req, res) => {
    const token = req.headers['x-access-token'];
    if(!token){
        var respuesta = {
            error: true,
            message: "authorization required",
            data: null
        }        
        //return res.status(401).json
        res.status(401).json(respuesta)
    }else{
        //verificamos el token
        const decod = jwt.verify(token, config.secret);
        if(decod){
            var id_movie = req.body.id_movie;       
            try{
                const mov = 'select * from movies where movie_id = $1';    
                const val = [id_movie];

                const result = await db.query(mov, val);
                console.log(result);
                //obtenemos el precio e insertamos en la tabla ticket
                var precio = result.rows[0].movie_price;

                //insertamos el ticket

                const ticket = 'insert into ticket values (default, $1, $2, $3)';
                const values = [id_movie, precio, 1];
                const resu = await db.query(ticket, values);

                if(resu){
                    var respuesta = {
                        error: false,
                        message: "insertado correctamente",
                        data: resu.rowCount
                    }        
                }else{
                    var respuesta = {
                        error: true,
                        message: "error en la bd",
                        data: null
                    }        
                }               

            }catch(error){
                console.log(error);
            }    
        }
    }    
    res.json(respuesta)
})

module.exports = router;