import prisma from "../config/prisma.js"

export async function index(deckId) {
    return prisma.card.findMany({
        where: { deckId: Number(deckId) }
    });
}