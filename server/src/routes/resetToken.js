const express = require("express");
const pool = require("../database");
const router = express.Router();
const nodemailer = require ("nodemailer");

function makeid() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < 9; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var mailOptions = {
  from: "admin@techonemx.com",
  to: "alejandro.g.arriaga98@gmail.com",
  subject: "Reset your password for Lenovo",
  text: "Tshat was easy!",
};

var transporter = nodemailer.createTransport({
  host: "p3plzcpnl449079.prod.phx3.secureserver.net",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "admin@techonemx.com",
    pass: "lenovo-event",
  },
});

router.post("/lenovo-event/resetToken", async (req, res) => {
  console.log(req.body.values);
  const email = req.body.values.email;

  pool.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: err });
    }

    if (result.length > 0) {
      mailOptions.to = result[0].email;
      reset_id = makeid();
      mailOptions.text =
        "El código de validación para cambiar tu contraseña es: " + reset_id;
      console.log(reset_id);

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      let sql2 =
        'UPDATE users SET reset = "' +
        reset_id +
        '"' +
        ' WHERE email = "' +
        result[0].email +
        '"';

        pool.query(sql2,
            
            (err) => {
                if (err){
                    res.send({err:err});
                } else {
                    res.send({message: "Token has been updates"});
                    console.log("Token has been updates");
                }
            }
        );

        


    } else {
      res.send({ message: "Invalid email or password" });
    }
  });
});

module.exports = router;
