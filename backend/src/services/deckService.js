import prisma from "../config/prisma.js"

export async function index(userId) {
    return prisma.deck.findMany({
        where: { userId: Number(userId) }
    });
}

export async function show(id) {
    return prisma.deck.findUnique({
        where: { id: Number(id) }
    })
}

export async function create(data) {
    return prisma.deck.create({
        data,
    })
}

export async function update(id, data) {
    return prisma.deck.update({
        where: { id: Number(id)},
        data,
    })
}