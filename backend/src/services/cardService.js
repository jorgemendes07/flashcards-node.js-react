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

export async function create(data) {
    return prisma.card.create({
        data
    })
}

export async function update(id, data) {
    return prisma.card.update({
        where: { id: Number(id) },
        data,
    })
}

export async function remove(id) {
    return prisma.card.delete({
        where: { id: Number(id) },
    });
}