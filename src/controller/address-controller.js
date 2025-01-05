import addressService from "../service/address-service.js";

const createAddressController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const contactId = req.params.contactId;
        const request = req.body;

        const result = await addressService.createAddress(username, contactId, request);
        res.status(201).json({
            message: 'Successfully created address',
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const getAddressByIdController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const contactId = req.params.contactId;
        const addressId = req.params.addressId;

        const result = await addressService.getAddressById(username,contactId, addressId);
        res.status(200).json({
            message: 'Successfully getting address',
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const updateAddressController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const contactId = req.params.contactId;
        const addressId = req.params.addressId;
        const request = req.body;
        request.id = addressId;
        request.contactId = contactId;

        const result = await addressService.updateAddress(username, contactId, addressId, request);
        res.status(200).json({
            message: 'Successfully updated address',
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const deleteAddressController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const contactId = req.params.contactId;
        const addressId = req.params.addressId;

        await addressService.removeAddress(username, contactId, addressId);
        res.status(200).json({
            message: 'Successfully deleted address'
        });
    } catch (error) {
        next(error);
    }
}

export default {
    createAddressController,
    getAddressByIdController,
    updateAddressController,
    deleteAddressController
}