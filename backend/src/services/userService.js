import prisma from "../config/prisma.js"

export async function index() {
    return prisma.user.findMany({
        select: {
            id: true,
            email: true,
            createdAt: true,
            updatedAt: true,
        },
    });
}

export async function show(id) {
    return prisma.user.findUnique({
        where: { id: Number(id) }
    })
}

export async function create(data) {
    return prisma.user.create({
        data,
    })

}