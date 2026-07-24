import { Router } from "express";
import * as cardController from "../controllers/cardController.js";

const routes = Router();

routes.get("/", cardController.index);
routes.get("/:id", cardController.show);
routes.post("/", cardController.create);

export default routes;