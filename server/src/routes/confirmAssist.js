const express = require('express');
const pool = require('../database');
const router = express.Router();


router.post('/lenovo-event/confirmAssist', async (req,res) => {
    console.log(req.body.values);
    
    const email = req.body.values.email;

    pool.query(
        "INSERT INTO confirmed email VALUES(?)",
        email, 
        
        (err) => {
            if (err){
                res.send({err:err});
            } else {
                res.send({message: "Data has been saved"});
            }
        }
    );
}); 
