import express, { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  updatePatch,
} from "../controllers/products.controller";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getOneProduct);
router.post("/"), createProduct;
router.patch("/:id", updatePatch);
router.delete("/:id", deleteProduct);

export { router };
