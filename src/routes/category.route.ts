import express from "express";
import categoryController from "../controllers/category.controller";
import {
  validateBodyCategory,
  validateCategoryID,
} from "../validators/category.validate";

const router = express.Router();

router.get("/", categoryController.getAll);

router.get("/:id", validateCategoryID, categoryController.getOne);

router.post("/", validateBodyCategory, categoryController.create);

router.put(
  "/:id",
  validateCategoryID,
  validateBodyCategory,
  categoryController.update
);

router.delete("/:id", validateCategoryID, categoryController.remove);

export default router;
