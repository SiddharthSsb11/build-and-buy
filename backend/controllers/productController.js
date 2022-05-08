import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
//import Order from '../models/orderModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  /* const keyword = req.query.keyword
  ///////? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
  : {} */

  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1

  // Keyword searches by Name and Brand
  const keyword = req.query.keyword
    ? {
        $or: [
          {
            name: {
              $regex: req.query.keyword,
              $options: "i",
            },
          },
          {
            brand: {
              $regex: req.query.keyword,
              $options: "i",
            },
          },
        ],
      }
    : {};
  //console.log(keyword);

  //const products = await Product.find({});
  const count = await Product.countDocuments({ ...keyword });
  //const products = await Product.find({ ...keyword }); //.limit(pageSize).skip(pageSize * (page - 1));
  const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1));
  //res.json(products);
  res.json({ products, page, pages: Math.ceil(count / pageSize) })

});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
/* const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
}); */

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});

export { getProducts, getProductById, createProductReview, getTopProducts };
