const express = require('express');
const pool = require('../database');
const router = express.Router();


router.post('/lenovo-event/registroInvitados', async (req,res) => {
    console.log(req.body.values);
    
    const email = req.body.values.email;
    const dia = req.body.values.dia;
    const horario = req.body.values.horario;

    pool.query(
        "INSERT INTO invitados (email, fecha, horario) VALUES(?,?,?)",
        [email, dia, horario], 
        
        (err) => {
            if (err){
                res.send({err:err});
            } else {
                res.send({message: "Data has been saved"});
            }
        }
    );
}); 


module.exports = router; 