const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // stores temp file on disk

const {
  createOrder,
  getAllOrders,
  getOrderById
} = require('../controllers/orderController');

router.post('/', upload.single('invoice'), createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

module.exports = router;
