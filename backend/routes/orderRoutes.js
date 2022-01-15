import express from 'express';
const router = express.Router();
import { 
    addOrderItems, getOrderById, updateOrderToPaid, 
    getMyOrders, updateOrderToDelivered, getOrders 
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById); // '/:id' keep such routes in the end
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);
export default router;