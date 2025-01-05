import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().max(50).required(),
    name: Joi.string().max(50).required(),
    email: Joi.string().max(50).required(),
    password: Joi.string().min(6).max(50).required(),
});

const loginValidation = Joi.object({
    username: Joi.string().max(50).required(),
    password: Joi.string().min(6).max(50).required(),
})

export {
    registerUserValidation,
    loginValidation
}