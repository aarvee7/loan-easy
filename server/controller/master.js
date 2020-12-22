const reqest = require("request");
const test = async (req, res) => {
  console.log("test");
  res.send("helllowwwww");
};

module.exports = { test: test };
