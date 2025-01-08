import contactRepository from "../repository/contact-repository.js";
import {validate} from "../validation/validate.js";
import {
    createContactValidation,
    getContactValidation, paggingValidation,
    searchContactValidation,
    updateValidation
} from "../validation/contact-validation.js";
import {ResponseError} from "../error/response-error.js";
import {searchConditions} from "../helper/search-conditions.js";
const createContact = async (username, request) => {
    const contact = validate(createContactValidation, request);
    contact.username = username;

    return contactRepository.create(contact);
}

const getContactById = async (username, contactId) => {
    contactId = validate(getContactValidation, contactId);
    const contact = await contactRepository.findById(username, contactId);
    if (!contact) {
        throw new ResponseError(404, `Contact with id ${contactId} not found`);
    }

    return contact;
}

const updateContact = async (username, contactId, request) => {
    const contact = validate(updateValidation, request);
    const contactExist = await contactRepository.contactCount(username, parseInt(contactId));
    if (contactExist !== 1) {
        throw new ResponseError(404, `Contact not found`);
    }

    return contactRepository.update(parseInt(contactId), contact);
}

const removeContact = async (username, contactId) => {
    const contactExist = await contactRepository.contactCount(username, parseInt(contactId));
    if (contactExist !== 1) {
        throw new ResponseError(404, 'Contact not found');
    }

    return contactRepository.remove(parseInt(contactId));
}

const searchContact = async (username, request) => {
    request = validate(searchContactValidation, request);

    const conditions = searchConditions(username, request);

    return contactRepository.search(conditions);
}

const listContact = async (username, request) => {
    request = validate(paggingValidation, request);

    const page = parseInt(request.page) || 1;
    const size = parseInt(request.size) || 10;

    const totalItems = await contactRepository.countContacts(username);
    const contacts = await contactRepository.getAll(username,page, size);

    const totalPage = Math.ceil(totalItems / size);

    return {
        data: contacts,
        pagination: {
            currentPage: page,
            pageSize: size,
            totalItems: totalItems,
            totalPage: totalPage
        }
    }
}

export default {
    createContact,
    getContactById,
    updateContact,
    removeContact,
    searchContact,
    listContact
}