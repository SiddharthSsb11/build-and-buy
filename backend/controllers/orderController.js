import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  //console.log(orderItems);
  //price check btw the ordered items and product price saved in server
  orderItems.forEach(async (item)=>{
    //console.log(item, 'orderItems Array item');
    
    let productOriginal= await Product.findById(item.product);
    //console.log(productOriginal);
    
    if( item.price !== productOriginal.price) {
      res.status(400);
      throw new Error("There is a discrepancy between the prices of the items,and whats in the Database, please try again");
    }
  });

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {

  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
    console.log(order, 'order from server');
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
})

export { addOrderItems, getOrderById };

