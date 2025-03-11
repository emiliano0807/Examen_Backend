
const {ProductController} = require("../controllers/products.controller");
const router = require('express').Router();

router.get("/",ProductController.getAll);
router.get("/:matricula",ProductController.getOneById);
router.post("/",ProductController.create);
router.patch("/:matricula",ProductController.update);
router.delete("/:matricula",ProductController.delete);

module.exports = router;