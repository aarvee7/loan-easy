const reqest = require("request");
const { dbConnect, dbName } = require("../app/db");

const test = async (req, res) => {
  console.log("test");
  res.send("helllowwwww");
};

const getdata = async (req, res) => {
  var cursor = dbName().find().toArray();
  const result = await cursor;
  console.log(result);
  res.send(result);
};

const postdata = async (req, res) => {
  const body = req.body;
  console.log(body);
  var cursor = dbName().insertOne(body).then(res.send("data saved"));
};
const postData = (module.exports = {
  test: test,
  fetchData: getdata,
  postData: postdata,
});
