const router = require("express").Router();
const avertismentController = require("../controllers/avertisment.controller.js");

router.post("/:_id", avertismentController.updateAvertisementById);

router.get("/:_id", avertismentController.getAvertismentById);

module.exports = router;
