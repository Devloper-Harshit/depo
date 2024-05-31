require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',     
  // password: null, 
  // database: 'ocrdatabase' 
  
  



user: process.env.USER,
host: process.env.DB_HOST,
database: process.env.DB_DATABASE,
password: process.env.DB_PASS,
port: process.env.DB_PORT

});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});


module.exports = connection;
