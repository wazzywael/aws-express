const express = require("express");
const router = express.Router();
const fetchFile = require("../public/javascripts/fetchFile");

/* GET home page. */
router.get("/", function (req, res, next) {
  try {
    fetchFile
      .getFileFromS3()
      .then((response) => {
        console.log("Output:", response);
        res.json(response);
      })
      .catch((err) => {
        res.send(err.message);
      });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
