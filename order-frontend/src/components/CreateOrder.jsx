

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function CreateOrder() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    orderAmount: '',
    deliveryAddress: ''
  });

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setFormData(prev => ({ ...prev, customerEmail: email }));
    }
  }, []);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append('invoice', invoice);

    try {
      await axios.post('http://localhost:5000/orders', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Order created successfully!');
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      toast.error(err.response?.data?.error || '❌ Failed to create order');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h2 className="text-center mb-4 text-primary">📦 Create New Order</h2>
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Customer Name</label>
              <input type="text" className="form-control" name="customerName" required onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Customer Email</label>
              <input
                type="email"
                className="form-control"
                name="customerEmail"
                value={formData.customerEmail}
                readOnly
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Order Amount (₹)</label>
              <input type="number" className="form-control" name="orderAmount" required onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Delivery Address</label>
              <textarea
                className="form-control"
                name="deliveryAddress"
                rows="3"
                required
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Invoice (PDF)</label>
              <input
                type="file"
                className="form-control"
                accept="application/pdf"
                required
                onChange={(e) => setInvoice(e.target.files[0])}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              ➕ Submit Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
