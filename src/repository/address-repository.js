import {prismaClient} from "../application/database.js";

const create = async (data) => {
    return prismaClient.address.create({
        data: data
    });
}

const findById = async (contactId, addressId) => {
    return prismaClient.address.findFirst({
        where: {
            contactId: parseInt(contactId),
            id: parseInt(addressId)
        }
    });
}

const addressCount = async (contactId, addressId) => {
    return prismaClient.address.count({
        where: {
            contactId: parseInt(contactId),
            id: parseInt(addressId)
        }
    });
}

const update = async (addressId, data) => {
    return prismaClient.address.update({
        where: {
            id: addressId
        },
        data: data
    });
}

const remove = async (addressId) => {
    return prismaClient.contact.deleteMany({
        where: {
            id: addressId
        }
    });
}

export default {
    create,
    findById,
    addressCount,
    update,
    remove
}