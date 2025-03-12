const { saludarController } = require("../controllers/greet.controller");
const { ProductController } = require("../controllers/products.controller");
const router = require("express").Router();


router.get("/",saludarController)
router.get("/saludo-2",saludarController)


module.exports = router