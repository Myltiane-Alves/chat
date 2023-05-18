import express from 'express'
import {create, getById, getAll, update, deleteUser} from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.post('/', create);
router.get('/:id', getById);
router.get('/', getAll)
router.put('/:id',authMiddleWare, update)
router.delete('/:id', deleteUser)


export default router