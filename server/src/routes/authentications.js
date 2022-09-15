const express = require('express');
const pool = require('../database');
const router = express.Router();



router.post('/lenovo-event/signIn', async (req,res) => {
    console.log(req.body.values);
   
    const email =req.body.values.email;
    const password =req.body.values.password;

    pool.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password], 
        (err,result ) => {
            if (err) {
                console.log(err);
                res.send({err:err});
            }

            if (result.length >0 ) {
                res.send(result[0]);                
            }
            
            else {
                res.send({ message: "Invalid email or password"});
            }
        }
    );
    
    pool.query(
                    "INSERT INTO confirmed (email) VALUES(?)",
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


module.exports = router; 