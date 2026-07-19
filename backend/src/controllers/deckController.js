import * as deckService from "../services/deckService.js";
import * as userService from "../services/userService.js";

export async function index(req, res) {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ error: "O parâmetro userId é obrigatório." })
        }

        const decks = await deckService.index(userId);
        res.json(decks);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao buscar decks."})        
    }
}

export async function show(req, res) {
    try {
        const { id } = req.params;
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ error: "O parâmetro userId é obrigatório" });
        }

        const deck = await deckService.show(id);

        if (!deck || deck.userId !== Number(userId)) {
            return res.status(404).json({ error: "Deck não encontrado." });
        }

        res.json(deck);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao buscar deck" });
    }
}

export async function create(req, res) {
    try {
        const { name, userId } = req.body;

        if(!name || !userId) {
            return res.status(400).json({ error: "Os campos name e userId são obrigatórios." });
        }

        const user = await userService.show(userId);

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        const deck = await deckService.create({ name, userId: Number(userId) });
        res.status(201).json(deck)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Erro ao buscar deck" });
    }
    
}