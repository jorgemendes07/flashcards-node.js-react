import prisma from "../config/prisma.js"

export async function index(userId) {
    return prisma.deck.findMany({
        where: { userId: Number(userId) }
    });
}