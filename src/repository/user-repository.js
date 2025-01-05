import { prismaClient} from "../application/database.js";

const createUser = async (data) => {
    return prismaClient.user.create({
        data:data,
        select: {
            username: true,
            name: true
        }
    })
}

const userCount = async (username) => {
    return prismaClient.user.count({
        where: {
            username: username
        }
    })
}

const findUserById = async (username) => {
    return prismaClient.user.findUnique({
        where: {
            username: username
        }
    });
}

export default {
    createUser,
    findUserById,
    userCount
}