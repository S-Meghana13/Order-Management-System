

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
  
    axios.get('http://localhost:5000/orders')
      .then((res) => {
        const filtered = res.data.filter(order => order.customerEmail === userEmail);
        setOrders(filtered);
      })
      .catch((err) => console.error(err));
  }, []);
  

  return (
    <div className="container py-5">
      <h4 className="mb-4 text-center text-primary">📄 All Orders</h4>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Date</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.customerName}</td>
                  <td>₹{order.orderAmount}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>
                    <a
                      href={order.invoiceFileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View PDF
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;
