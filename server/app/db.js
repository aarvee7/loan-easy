const MongoClient = require("mongodb").MongoClient;
const db = process.env.DB || "userinfo";
const collection = process.env.Collection || "user";
var dbC, collN;

const url = "mongodb+srv://raj:Madrid@70@cluster0.bi096.mongodb.net/test";
const client = new MongoClient(url, { useUnifiedTopology: true });
client.connect((err, database) => {
  console.log("connected");
  dbC = database.db(db);
  collN = dbC.collection(collection);
});

module.exports = {
  dbConnect: client,
  dbName: function () {
    return collN;
  },
};
