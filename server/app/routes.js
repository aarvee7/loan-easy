const express = require("express");
const router = express.Router();

const controller = require("../controller/master");

router.get("/test", controller.test);
router.get("/db", controller.fetchData);
router.post("/new", controller.postData);

module.exports = router;
