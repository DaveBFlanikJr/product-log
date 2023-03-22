import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
  Products
 **/

//get all products
router.get("/product", (req, res) => {
  res.json({ message: "Hello" });
});
// get a individual product
router.get("/product/:id", () => {});
//update a product
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
//create a product
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
//delete a product
router.delete("/product/:id", () => {});

/**
  Updates
 **/
//get all update
router.get("/update", () => {});
// get a individual update
router.get("/update/:id", () => {});
//update a update
router.put("/update/:id", (req, res) => {});
//create a update
router.post("/update", () => {});
//delete a update
router.delete("/update/:id", () => {});

/**
  Update Points
 **/
//get all updatepoint
router.get("/updatepoint", () => {});
// get a individual updatepoint
router.get("/updatepoint/:id", () => {});
//update a updatepoint
router.put("/updatepoint/:id", () => {});
//create a updatepoint
router.post("/updatepoint", () => {});
//delete a updatepoint
router.delete("/updatepoint/:id", () => {});

export default router;
