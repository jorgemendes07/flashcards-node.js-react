import prisma from "../config/prisma.js"

export async function index(deckId) {
    return prisma.card.findMany({
        where: { deckId: Number(deckId) }
    });
}

export async function show(id) {
    return prisma.card.findUnique({
        where: { id: Number(id) }
    });
}