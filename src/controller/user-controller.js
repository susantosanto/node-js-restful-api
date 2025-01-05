import userService from '../service/user-service.js';

const registerController = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(201).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const loginController = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.status(201).json({
            message: 'Login Success',
            token : result
        })
    } catch (error) {
        next(error);
    }
}

export {
    registerController,
    loginController
}