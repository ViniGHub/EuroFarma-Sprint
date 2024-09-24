async function connectOracle() {
   const oracledb = require("oracledb");
   oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
   let connection;

   try {
      connection = await oracledb.getConnection({
         user: "Vinifarma",
         password: "ert23R$71",
         connectString: "localhost:1521/xe",
      });
      connection.execute(
         `SELECT * FROM Usuarios`,
         [],
         function (err, result) {
            if (err) {
               console.error(err.message);
               return;
            }
            console.log(result.rows);
         }
      );
      console.log("Successfully connected to Oracle Database");
   } catch (err) {
      console.error("Error: ", err);
   } finally {
      if (connection) {
         try {
            await connection.close();
            console.log("Connection closed");
         } catch (err) {
            console.error("Error: ", err);
         }
      }
   }
}

async function connectSqlite() {
   const sqlite3 = require('sqlite3').verbose();

   // open database in memory
   let db = new sqlite3.Database(':memory:', (err) => {
      if (err) {
         return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
   });

   // close the database connection
   db.close((err) => {
      if (err) {
         return console.error(err.message);
      }
      console.log('Close the database connection.');
   });
}

connectOracle();