const reqest = require("request");
const {Pool,Client} = require('pg');

const Cn = "postgres://eefqntfextdkxo:b18008421b2a6d572385d640d20a817c611e8dc938e16bc0174a5f1aa4598c0c@ec2-3-224-164-189.compute-1.amazonaws.com:5432/df6mv5vebpojsj";

const pool = new Pool({
  connectionString: Cn,
  ssl : {
    requestCert : true,
    rejectUnauthorized : false
  }
});

class Controllers {
 

  async postGeoData(msg) {
    var i1 = msg.geo;
    // console.log(i1);
    var i2 = msg.ip;
    const query = "INSERT INTO confidential(geo,ip,name) VALUES($1, $2,$3) RETURNING*";
    const values = [i1, i2,"name"];
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
          resolve(res.rows[0]);
        }
      });
    });
  }


}

module.exports = Controllers;