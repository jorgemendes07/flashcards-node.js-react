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

export async function show(req, res) {
    try {
        const { id } = req.params;
        const user = await userService.show(id);

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado."});
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar usuário." });
    }
}

export async function create(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "E-mail e senha são obrigatórios." });
        }

        const user = await userService.create({ email, password });
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário." })
    }

    res.status(201).json(user)
}