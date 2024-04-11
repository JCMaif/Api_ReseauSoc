import express from 'express';
import { postController } from '../controllers/postController.js';
import {requireAuthToken} from '../middlewares/authToken.js';

const router = express.Router();

router.get('/trending', postController.getTrendings);
router.get('/newest', postController.getNewest);
router.get('/post/:id', postController.findOnePost);
router.post('/post/:id', requireAuthToken, postController.createPost);

export default router