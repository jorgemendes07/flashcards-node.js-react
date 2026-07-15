import * as userService from "../services/userService.js"

export async function index(req, res) {
    try {
        const users = await userService.index();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar usuários." });
    }
}