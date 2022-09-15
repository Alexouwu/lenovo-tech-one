const express = require("express");
const pool = require("../database");
const router = express.Router();

router.post('/lenovo-event/getdate', async (req,res) => {
    console.log(req.body.values);
   
    const email =req.body.values.email;    

    pool.query(
        "SELECT fecha,horario FROM invitados WHERE email = ?",
        [email],
        (err,result) => {
            if(err) {
                res.send({err: err});
            }
            if(result.length > 0) {
                res.send(result[0]);
            } else {
                res.send({
                    message: "Invalid email"
                })
            }
        }
    );    

}); 

module.exports = router;