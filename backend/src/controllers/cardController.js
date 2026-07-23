import * as cardService from "../services/cardService.js";
import * as deckService from "../services/deckService.js";

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

export async function show(req, res) {
    try {
        const { id } = req.params;
        const { deckId, userId } = req.query;

        if(!deckId || !userId) {
            return res.status(400).json({ error: "O parâmetro deckId é obrigatório." });
        }

        const deck = await deckService.show(deckId);

        if (!deck || deck.userId !== Number(userId)) {
            return res.status(404).json({ error: "Deck não encontrado." })
        }

        const card = await cardService.show(id);

        if(!card || card.deckId !== Number(deckId)) {
            return res.status(404).json({ error: "Card não encontrado." });
        }

        res.json(card)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar card." })
    }
}