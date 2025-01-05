import Joi from "joi";

const createAddressValidation = Joi.object({
    street: Joi.string().max(255).required(),
    city: Joi.string().max(100).required(),
    province: Joi.string().max(100).required(),
    country: Joi.string().max(100).required(),
    postal_code: Joi.string().max(10).required()
});

const getAddressValidation = Joi.number().positive().required();

const updateAddressValidation = Joi.object({
    id: Joi.number().positive().required(),
    street: Joi.string().max(255).required(),
    city: Joi.string().max(100).required(),
    province: Joi.string().max(100).required(),
    country: Joi.string().max(100).required(),
    postal_code: Joi.string().max(10).required(),
});

export {
    createAddressValidation,
    getAddressValidation,
    updateAddressValidation
}