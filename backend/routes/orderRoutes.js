import express from 'express';
const router = express.Router();
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById); // '/:id' keep such routes in the end
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;