import {ResponseError} from "../error/response-error.js";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new ResponseError(401, 'Authorization headers is missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        throw new ResponseError(401, 'Token is missing from authorization headers');
    }

    try {
        const secret = process.env.JWT_SECRET;
        req.user = jwt.verify(token, secret);
        next();
    } catch (error) {
        throw new ResponseError(error.status, 'Invalid Credentials');
    }
}

export default authMiddleware;