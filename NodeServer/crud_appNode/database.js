const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
client.connect();

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
