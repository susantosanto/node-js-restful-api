import contactRepository from "../repository/contact-repository.js";
import {validate} from "../validation/validate.js";
import {createContactValidation, getContactValidation, updateValidation} from "../validation/contact-validation.js";
import {ResponseError} from "../error/response-error.js";

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

export default {
    createContact,
    getContactById,
    updateContact,
    removeContact,
}