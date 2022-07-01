const express = require("express");
const router = express.Router();
const trackController = require("../controllers/trackController");

router.post("/:id", trackController.track);
router.post("/", trackController.registerPack);

module.exports = router;
