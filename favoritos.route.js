cont express = require("express");
var router = express.Router();



var controller = require("../favoritos.controller");

router.get("/favoritos", controller.get);
router.post("/favoritos", controller.post);
router.put("/favoritos", controller.put);
router.put("/favoritos", controller.delete);

module.exports = router;

