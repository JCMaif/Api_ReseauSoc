import express from 'express';
import { loginController, logout } from '../controllers/loginController.js';

const router = express.Router()

router.post('/login', loginController);
router.get('/logout', logout);

export default router