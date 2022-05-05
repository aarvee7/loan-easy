const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");
const router = express.Router();

const Controller = require("../controller/master");

const controller = new Controller();
const urlPrefix = "/v1";

router.post(urlPrefix + "/geoData", async (req,res) => {

    const result = await controller.postGeoData(req.body);
    console.log(result);
    res.status(200).send("Success");

});

module.exports = router;
