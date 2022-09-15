const express = require('express');
const pool = require('../database');
const router = express.Router();


router.post('/lenovo-event/register', async (req,res) => {
    console.log(req.body.values);
    
    const name =req.body.values.name;
    const middlename =req.body.values.middlename;
    const business =req.body.values.business;
    const email = req.body.values.email;
    const password =req.body.values.password;
    const password2=req.body.values.password2;

    pool.query(
        "INSERT INTO users (name, middlename, business, email, password, reset) VALUES(?,?,?,?,?,?)",
        [name, middlename, business, email, password, password2], 
        
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