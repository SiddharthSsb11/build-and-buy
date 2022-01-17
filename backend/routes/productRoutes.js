import express from 'express'
//import asyncHandler from 'express-async-handler'
const router = express.Router();
import { getProducts, getProductById, createProductReview, getTopProducts } from '../controllers/productController.js';
///import Product from '../models/productModel.js';
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router.route('/:id').get(getProductById);

export default router;