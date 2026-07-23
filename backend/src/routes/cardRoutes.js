import { Router } from "express";
import * as cardController from "../controllers/cardController.js";

const routes = Router();

routes.get("/", cardController.index);
routes.get("/:id", cardController.show);

export default routes;