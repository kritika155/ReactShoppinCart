const mongoose = require("mongoose");
const express = require("express");
const Router = require("./routes");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
// Database Connection
// mongodb+srv://roysonam150:Inspire%40123@cluster0.u0j9kes.mongodb.net/moongoosedemodb?retryWrites=true&w=majority

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed:"));
db.once("open", function () {
  console.log("Connected to the database successfully");
});
// User model
const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  power_type: {
    type: String,
    require: true,
  },
  mana_power: Number,
  health: Number,
  gold: Number,
});

// const Mage = new mongoose.model("Mage", mageSchema);

// const mage_1 = new Mage({
//   name: "Takashi",
//   power_type: "Element",
//   mana_power: 200,
//   health: 1000,
//   gold: 10000,
// });

// mage_1.save();

app.use(Router);

app.listen(3800, () => {
  console.log("Server started at port 3800");
});
