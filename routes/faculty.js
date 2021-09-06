const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "this faculty get working",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "this faculty post working",
  });
});
module.exports = router;
