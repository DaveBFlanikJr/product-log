import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
  Products
 **/

//get all products
router.get("/product", getProducts);
// get a individual product
router.get("/product/:id", getProduct);
//update a product
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);
//create a product
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
//delete a product
router.delete("/product/:id", deleteProduct);

/**
  Updates
 **/
//get all update
router.get("/update", getUpdates);
// get a individual update
router.get("/update/:id", getUpdate);
//update a update
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status")
    .isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"])
    .optional(),
  body("version").optional(),
  updateUpdate
);
//create a update
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
//delete a update
router.delete("/update/:id", deleteUpdate);

/**
  Update Points
 **/
//get all updatepoint
router.get("/updatepoint", () => {});
// get a individual updatepoint
router.get("/updatepoint/:id", () => {});
//update a updatepoint
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
//create a updatepoint
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
//delete a updatepoint
router.delete("/updatepoint/:id", () => {});

export default router;
