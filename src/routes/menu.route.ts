import express from "express";

import menuController from "../controllers/menu.controller";
import { validateBodyMenu, validateMenuID } from "../validators/menu.validate";

const router = express.Router();

router.get("/", menuController.getAll);

router.get("/:id", validateMenuID, menuController.getOne);

router.post("/", validateBodyMenu, menuController.create);

router.put("/:id", validateMenuID, validateBodyMenu, menuController.update);

router.delete("/:id", validateMenuID, menuController.remove);

export default router;
