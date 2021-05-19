
//Library
const { Router } = require("express");
const router = Router();
const db = require('../db/database');

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

router.post(URL + "/movies/:movie/buy", async (req, res) => {
    var id_movie = req.params.movie;   
    //console.log(id_movie);     
    try{
        const mov = 'select * from movies where movie_id = $1';    
        const val = [id_movie];

        const result = await db.query(mov, val);
        console.log(result.rows);
        //obtenemos el precio e insertamos en la tabla ticket
        var precio = result.rows[0].movie_price;

        //insertamos el ticket

        const ticket = 'insert into ticket values (default, $1, $2, $3)';
        const values = [id_movie, precio, 1];

        var respuesta = {
            error: false,
            message: "insertado correctamente",
            data: precio
        }        

    }catch(error){
        console.log(error);
    }    
    res.json(respuesta)
})

module.exports = router;