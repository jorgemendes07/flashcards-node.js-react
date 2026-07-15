import express from "express"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Testando API"})
});

export default app;