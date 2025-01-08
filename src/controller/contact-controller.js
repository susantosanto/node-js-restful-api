import contactService from "../service/contact-service.js";

const createContactController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const request = req.body;
        const result = await contactService.createContact(username, request);

        res.status(201).json({
            message: "success added contact",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

const getContactController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const contactId = req.params.contactId;
        const result = await contactService.getContactById(username, contactId);

        res.status(200).json({
            message: "success get contact",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

const updateContactController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const request = req.body;
        const contactId = req.params.contactId;
        // request.id = contactId;
        const result = await contactService.updateContact(username, contactId, request);

        res.status(201).json({
            message: "success updated contact",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

const deleteContactController = async (req, res, next) => {
    try {
        const contactId = req.params.contactId;
        const username = req.user.username;
        await contactService.removeContact(username, contactId);
        res.status(200).json({
            message: "success delete contact",
        });
    } catch (error) {
        next(error);
    }
}

const searchController = async (req, res, next) => {
    try {
        const username = req.user.username;
        const request = {
            name: req.query.name,
            email: req.query.email,
            phone: req.query.phone
        }

        const result = await contactService.search(username, request);
        res.status(200).json({
            message: "success searching contact",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

export default {
    createContactController,
    getContactController,
    updateContactController,
    deleteContactController,
    searchController
}