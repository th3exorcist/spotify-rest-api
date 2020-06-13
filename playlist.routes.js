cont express = require("express");
var router = express.Router();



var controller = require("../playlist.controller");

router.get("/playlist", controller.get);
router.post("/playlist", controller.post);
router.put("/playlist", controller.put);
router.put("/playlist", controller.delete);

module.exports = router;

