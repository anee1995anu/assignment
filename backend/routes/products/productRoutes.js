const { addProduct, getProductById, getallProducts, updateProduct, deleteProduct } = require("../../controllers/productController/productController");
const asyncHandler = require("../../utils/asyncHandler");

const router=require("express").Router();


router.post("/",asyncHandler(addProduct))
router.get("/",asyncHandler(getallProducts))
router.get("/:id",asyncHandler(getProductById))
router.put("/:id",asyncHandler(updateProduct))
router.delete("/:id",asyncHandler(deleteProduct))


module.exports=router;