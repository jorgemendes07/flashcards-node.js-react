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
