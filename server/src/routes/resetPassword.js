const express = require("express");
const pool = require("../database");
const router = express.Router();

router.post("/lenovo-event/resetPassword", async (req, res) => {
  console.log(req.body.values);

  const reset = req.body.values.code;
  const password = req.body.values.password;

  let sql =
    'SELECT reset FROM users WHERE reset = "' + req.body.values.code + '"';

  let query = pool.query(sql, function (err, result) {
    if (err) {
      throw err;
    }

    if (result.length > 0) {
      let sql2 =
        'UPDATE users SET password = "' +
        req.body.values.password +
        '"' +
        ' WHERE reset = "' +
        req.body.values.code +
        '"';

      let query2 = pool.query(sql2, (err) => {
        if (err) {
          throw err;
        }
        console.log("PASSWORD UPDATED");
        res.send("OK PASS UPD");
      });
    } else {
      res.send("DATOS INCORRECTOS");
    }
  });
});

module.exports = router;
