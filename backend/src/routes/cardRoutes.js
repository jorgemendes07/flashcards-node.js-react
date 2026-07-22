import { Router } from "express";
import * as cardController from "../controllers/cardController.js";

const routes = Router();

routes.get("/", cardController.index);

export default routes;