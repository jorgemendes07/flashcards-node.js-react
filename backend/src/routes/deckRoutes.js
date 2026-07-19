import { Router } from "express";
import * as deckController from "../controllers/deckController.js"

const routes = Router();

routes.get("/", deckController.index);
routes.get("/:id", deckController.show);
routes.post("/", deckController.create);

export default routes;