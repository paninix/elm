const mysql = require('mysql');

let pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'1111',
  database:'elm',
});

let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        resolve( err )
      } else {
        connection.query(sql, values, ( err, data) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( data )
          }
          connection.release()
        })
      }
    })
  });
}

module.exports = query;
