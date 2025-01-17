import {prismaClient} from "../application/database.js";

const create = async (data) => {
    return prismaClient.contact.create({
        data: data
    });
}

const findById = async (username, contactId) => {
    return prismaClient.contact.findFirst({
        where: {
            username: username,
            id: contactId
        }
    });
}

const contactCount = async (username, contactId) => {
    return prismaClient.contact.count({
        where: {
            username: username,
            id: parseInt(contactId)
        }
    });
}

const update = async (contactId, data) => {
    return prismaClient.contact.update({
        where: {
            id: contactId
        },
        data: data
    });
}

const remove = async (contactId) => {
    return prismaClient.contact.delete({
        where: {
            id: contactId
        }
    });
}

const search = async (conditions) => {
    return prismaClient.contact.findMany({
        where: conditions
    });
}

const getAll = async (username, page, size) => {
    const skip = (page - 1) * size;
    return prismaClient.contact.findMany({
        where: {
            username: username
        },
        take: size,
        skip: skip
    });
}

const countContacts = async (username) => {
    return prismaClient.contact.count({
        where: {
            username: username
        }
    });
}

export default {
    create,
    findById,
    contactCount,
    update,
    remove,
    search,
    getAll,
    countContacts,
}