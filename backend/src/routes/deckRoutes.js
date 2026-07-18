import { Router } from "express";
import * as deckController from "../controllers/deckController.js"

const routes = Router();

routes.get("/", deckController.index);

export default routes;