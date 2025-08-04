
import React, { useState } from 'react';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';
import OrderById from './OrderById';
import './Dashboard.css';

import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('create');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
      
        <div className="col-md-3 bg-primary text-black vh-100 p-3">

          <h4 className="text-center mb-4">📦 Orders Panel</h4><br />
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="btn btn-outline-light w-100 mb-2" onClick={() => setActiveTab('create')}>📝 Create Order</button>
            </li><br />
            <li className="nav-item">
              <button className="btn btn-outline-light w-100 mb-2" onClick={() => setActiveTab('list')}>📄 Order List</button>
            </li><br />
            <li className="nav-item">
              <button className="btn btn-outline-light w-100 mb-2" onClick={() => setActiveTab('fetch')}>🔍 Fetch by ID</button>
            </li><br /><br/><br/>
            <li className="nav-item">
              <button className="btn btn-outline-danger w-100" onClick={handleLogout}>🚪 Logout</button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          {activeTab === 'create' && <CreateOrder />}
          {activeTab === 'list' && <OrderList />}
          {activeTab === 'fetch' && <OrderById />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
