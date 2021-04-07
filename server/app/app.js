const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;
//app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  next();
});
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use((req, res, next) => {
  res.setTimeout(240000, () => {
    res.send(408);
  });
  next();
});
app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.get("/", (req, res) => {
//   res.send("Welome");
// });
app.use(express.static(__dirname + "../../../dist/EXG-R01"));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
