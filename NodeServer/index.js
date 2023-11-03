let http = require("http");
const userModel = require("./model");
const db = require("./mongoDb");
let app = http.createServer(function (req, res) {
  if (req.url == "/add_user") {
    const user = req.body;
    res.write(req.body);
    // try {
    //   user.save();
    //   response.send(user);
    // } catch (error) {
    //   response.status(500).send(error);
    // }
    res.write("Welcome to this site");
  } else if (req.url == "/about") {
    res.write("This is about us page.");
  } else if (req.url == "/contact") {
    res.write("This is contact us page.");
  } else {
    res.write("This page is not found.");
  }
  res.end();
  console.log(req.url);
});
app.listen(3000);
