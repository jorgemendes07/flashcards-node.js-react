import * as deckService from "../services/deckService.js"

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