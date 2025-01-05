import express from 'express';
import {loginController, registerController} from '../controller/user-controller.js';

const publicRouter = express.Router();

publicRouter.post('/api/users/register', registerController);
publicRouter.post('/api/users/login', loginController);

export default publicRouter;