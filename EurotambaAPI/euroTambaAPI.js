const express = require('express');
const oracle = require('./connection');

const app = express();
const port = 3000; 
let connection;
oracle.connectOracle().then((conn) => connection = conn);

app.get('/trilha/:setor', (req, res) => {
  connection.execute(
    `SELECT * FROM Usuarios`,
    [],
    function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(result.rows);
      res.send(result.rows);
    }
  );
});

app.listen(port, () => {
  console.log(`API 1 escutando na porta ${port}`);
});