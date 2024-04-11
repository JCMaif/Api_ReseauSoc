import express from 'express';
import  * as loginController from '../controllers/loginController.js';

const router = express.Router()

router.post('/login', loginController.loginController);
router.get('/logout', loginController.logout);

export default router