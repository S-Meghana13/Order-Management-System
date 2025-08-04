const Order = require('../models/Order');
const cloudinary = require('../utils/cloudinary');
const sendEmail = require('../utils/emailService');

exports.createOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      phoneNumber,
      deliveryAddress,
      orderAmount,
      status
    } = req.body;

    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'Invoice PDF is required.' });
    }
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: 'raw'
    });

    const order = new Order({
      customerName,
      customerEmail,
      deliveryAddress,
      orderAmount,
      invoiceFileUrl: result.secure_url
    });

    const savedOrder = await order.save();
    try {
      await sendEmail(
        customerEmail,
        `Order Confirmation - ${customerName}`,
        `<p>Hello ${customerName},</p>
         <p>Your order for ₹${orderAmount} has been placed successfully.</p>
         <p>Delivery Address: ${deliveryAddress}</p>
         <p>Order ID: ${savedOrder._id}</p>`
      );
    } catch (emailErr) {
      console.warn('⚠️ Email failed to send:', emailErr.message);
    }

    res.status(201).json({
      message: '✅ Order created successfully',
      order: savedOrder
    });
  } catch (err) {
    console.error('❌ CREATE ORDER ERROR:', err.message);
    res.status(500).json({ error: 'Failed to create order', detail: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderDate: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};
