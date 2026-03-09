import express from "express";
import * as controller from "../controllers/homePageController.js";

const router = express.Router();

router.get("/homePage", controller.getAll);

router.post("/homePage", controller.create);

router.put("/homePage/:id", controller.update);

router.delete("/homePage/:id", controller.remove);

export default router;
