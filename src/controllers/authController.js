
const { Router } = require("express");
const router = Router();
const URL = "/api/v1";
const db = require('../db/database');
const jwt = require("jsonwebtoken");
const config = require('../../config');


router.post(URL + "/signin", async (req, res, next) => {
    var usr = req.body.user;
    var pwd = req.body.pass;    
    try{
        const mov = 'select * from users where user_name = $1 and password = md5($2)';
        const val = [usr, pwd];
        const result = await db.query(mov, val);
        //validamos que exista el user y pwd
        if(result.rows.length > 0){
            //creamos el token
            const token = jwt.sign({id: result.rows.user_id}, config.secret, { 
                //24 hrs
                expiresIn: 60 * 60 * 24
            })
            var respuesta = {
                error: false,
                message: "authenticado",
                data: token
            }
        }
    }catch(error){
        console.log(error);
    }

    res.json(
        respuesta 
    )
})

module.exports = router;