const express = require("express");
const router = express.Router();
const Authentication = require("./Authentication");

router.use("/auth", Authentication);

module.exports = router;
