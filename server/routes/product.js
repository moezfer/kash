const express = require("express");

const router = express.Router();

// controllers
const { postProduct, products } = require("../controllers/product");
const { requireSignin } = require("../controllers/auth");

router.post("/post-product ", requireSignin, postLink);
router.get("/products", links);

module.exports = router;
