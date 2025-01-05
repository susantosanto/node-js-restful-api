import addressRepository from "../repository/address-repository.js";
import {validate} from "../validation/validate.js";
import {getContactValidation} from "../validation/contact-validation.js";
import contactRepository from "../repository/contact-repository.js";
import {ResponseError} from "../error/response-error.js";
import {
    createAddressValidation,
    getAddressValidation,
    updateAddressValidation
} from "../validation/addresses-validation.js";

const checkContactMustExists = async (username, contactId) => {
    contactId = validate(getContactValidation, contactId);

    const contactExists = await contactRepository.contactCount(username, contactId);
    if (contactExists !== 1) {
        throw new ResponseError(404, `Contact with id ${contactId} not found`);
    }
    return contactId;
}

const createAddress = async (username, contactId, request) => {
    contactId = await checkContactMustExists(username, contactId);

    const address = validate(createAddressValidation, request);
    address.contactId = contactId;

    return addressRepository.create(address);
}

const getAddressById = async (username, contactId, addressId) => {
    contactId = await checkContactMustExists(username, parseInt(contactId));
    addressId = validate(getAddressValidation, addressId);
    const address = await addressRepository.findById(contactId, parseInt(addressId));
    if (!address) {
        throw new ResponseError(404, `Address with id ${addressId} not found`);
    }

    return address;
}

const updateAddress = async (username, contactId, addressId, request) => {
    contactId = await checkContactMustExists(username, contactId);
    const address = validate(updateAddressValidation, request);

    const addressExist = await addressRepository.addressCount(contactId, addressId);
    if (addressExist !== 1) {
        throw new ResponseError(404, 'Address not found');
    }

    return addressRepository.update(addressId, address);
}

const removeAddress = async (username, contactId, addressId) => {
    contactId = await checkContactMustExists(username, parseInt(contactId));
    addressId = validate(getAddressValidation, addressId);

    const addressExist = await addressRepository.addressCount(contactId, addressId);
    if (addressExist !== 1) {
        throw new ResponseError(404, 'Address with id ${addressId} not found');
    }

    return addressRepository.remove(addressId);
}

export default {
    createAddress,
    getAddressById,
    updateAddress,
    removeAddress,
}