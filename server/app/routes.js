const express = require("express");
const router = express.Router();

const controller = require("../controller/master");

const urlPrefix = "/v1";

router.get(urlPrefix + "/test", controller.test);
router.get(urlPrefix + "/db", controller.fetchData);
router.post(urlPrefix + "/new", controller.postData);

module.exports = router;
