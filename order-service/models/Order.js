
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String },
  deliveryAddress: { type: String, required: true }, // ✅ Added this line
  orderAmount: { type: Number, required: true },
  invoiceFileUrl: { type: String, required: true },
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
