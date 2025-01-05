import userRepository from '../repository/user-repository.js';
import {validate} from "../validation/validate.js";
import {loginValidation, registerUserValidation} from "../validation/user-validation.js";
import {ResponseError} from "../error/response-error.js";
import bcrypt from "bcrypt";
import {logger} from "../application/logging.js";
import jwt from "jsonwebtoken";

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await userRepository.userCount(user.username);
    if (countUser === 1) {
        throw new ResponseError(401, `User ${user.username} already exists`);
    }

    user.password = await bcrypt.hash(user.password, 10);
    logger.info(user);
    return userRepository.createUser(user);
}

const login = async (request) => {
    const loginRequest = validate(loginValidation, request);

    const user = await userRepository.findUserById(loginRequest.username);
    if (!user) {
        throw new ResponseError(404, `user ${loginRequest.userId} not found`);
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(400, 'Invalid Credentials');
    }

    const token = jwt.sign(
        {username: user.username, name: user.name},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
    );

    logger.info(`user ${user.username}, token ${token}`);
    return token;
}

export default {
    register,
    login
}

