// call all the required packages
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.DB_URL
const dbName = url.substr(url.lastIndexOf('/') + 1)



module.exports = { connect };
function connect() {
   return new Promise((resolve) => {
       MongoClient.connect(url, { useNewUrlParser: true }, function(err, mongoDB) {
           if (err) throw err;
           const dbo = mongoDB.db(dbName);
           resolve(dbo);
         });
   });
}

// const url = process.env.NODE_ENV === 'production' ?
//  process.env.DB_URL_PRD :
//  process.env.DB_URL_DEV;




