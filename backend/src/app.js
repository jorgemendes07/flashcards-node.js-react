import express from "express"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import deckRoutes from "./routes/deckRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/decks", deckRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Testando API"})
});

export default app;