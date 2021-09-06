const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const upload = require("../middleware/uploads");
const AccessoriesControllers = require("../controller/Accessories");
var checkAuth = require("../middleware/Rent");

// get method
router.get("/", (req, res, next) => {
  res.json({
    message: "success",
  });
});

// get Method Ad
router.get("/getAccess", AccessoriesControllers.getAccess);

//  GET data from ID
router.get("/:id", AccessoriesControllers.getAccessId);

// post ad method
router.post(
  "/AccessAdd",
  upload.array("AccessoriesImage", 12),
  AccessoriesControllers.AccessAdd
);

// rent Put method
router.put("/AccessPut/:id", AccessoriesControllers.AccessPut);

// patch method
router.patch("AccessPatch/:id", checkAuth, AccessoriesControllers.AccessPatch);

// delete method
router.delete("/AccessDelete/:id", AccessoriesControllers.AccessDelete);

module.exports = router;
