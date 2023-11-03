const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// server location
MongoClient.connect(url).then((client) => {
  console.log("Database created");

  // database name
  const db = client.db("ECOMMERCE");

  // collection name
  db.createCollection("shoes");
});
module.exports = MongoClient;
