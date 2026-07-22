import * as cardService from "../services/cardService.js";

export async function index (req, res) {
    try {
        const { deckId } = req.query;

        if (!deckId) {
            return res.status(400).json({ error: "O parâmetro deckId é obrigatório." });
        }

        const cards = await cardService.index(deckId);
        res.json(cards);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao listar cards." });
    }
}