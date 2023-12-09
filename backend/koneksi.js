/* eslint-disable no-var */
var mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
  host: 'bomkym8ogvvgv3gbcyef-mysql.services.clever-cloud.com',
  user: 'usgvmjho2t2lasf0',
  password: '5UgkPE6Xnmhi4jdu7xzZ',
  database: 'bomkym8ogvvgv3gbcyef',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql terkoneksi');
});

module.exports = conn;
