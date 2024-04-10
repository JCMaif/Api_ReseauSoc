import express from 'express';
import { getUserById, getCurrentUser, createUser } from '../controllers/userController.js';
import { requireAuthToken } from '../middlewares/authToken.js';

const router = express.Router();

router.get('/users/current', requireAuthToken, getCurrentUser)
router.get('users/:id', getUserById);
router.post('/signup', createUser);

export default router