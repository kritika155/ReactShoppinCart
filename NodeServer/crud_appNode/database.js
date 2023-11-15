const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
client.connect().then((client) => {
  console.log("Database created");

  // database name
  const db = client.db("Ecommerce");

  // collection name
  db.createCollection("shoes");
});

async function shoes() {
  try {
    const dataset = await client
      .db("Ecommerce")
      .collection("shoes")
      .find()
      .toArray();
    return JSON.stringify(dataset);
  } catch {
    console.log("db closed");
    await client.close();
  }
}
module.exports = { shoes };
