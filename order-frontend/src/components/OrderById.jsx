
import React, { useState } from 'react';
import axios from 'axios';

function OrderById() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const fetchOrder = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/orders/${orderId}`);
      setOrder(res.data);
    } catch (err) {
      alert('❌ Order not found');
      setOrder(null);
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">🔍 Fetch Order by ID</h4>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={fetchOrder}>Search</button>

      {order && (
        <div className="border p-3 rounded bg-light">
          <p><strong>Customer:</strong> {order.customerName}</p>
          <p><strong>Email:</strong> {order.customerEmail}</p>
          <p><strong>Amount:</strong> ₹{order.orderAmount}</p>
          <p><strong>Address:</strong> {order.deliveryAddress}</p>
          <p><strong>Invoice:</strong> <a href={order.invoiceFileUrl} target="_blank" rel="noopener noreferrer">View PDF</a></p>
        </div>
      )}
    </div>
  );
}

export default OrderById;
