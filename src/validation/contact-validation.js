import Joi from "joi";

const createContactValidation = Joi.object({
    first_name: Joi.string().max(50).required(),
    last_name: Joi.string().max(50).optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().optional(),
});

const getContactValidation = Joi.number().positive().required();

const updateValidation = Joi.object({
    id: Joi.number().positive().required(),
    first_name: Joi.string().max(50).required(),
    last_name: Joi.string().max(50).optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().max(50).optional(),
});

export {
   createContactValidation,
   updateValidation,
   getContactValidation
}