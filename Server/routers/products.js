const express = require("express");
const router = express.Router();
const productManagement = require("../service/product");
router.get("/", productManagement.GetProducts);
router.post("/add", productManagement.AddProduct);
router.patch("/update", productManagement.UpdateProduct);
router.delete("/delete", productManagement.DeleteProduct);

module.exports = router;
