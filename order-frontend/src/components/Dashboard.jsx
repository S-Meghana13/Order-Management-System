


import React, { useState } from 'react';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';
import OrderById from './OrderById';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('create');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');  // updated key
    navigate('/signin');
  };

  return (
    <div className="container-fluid">
      {/* ☰ Toggle Button on Mobile */}
      <div className="d-md-none bg-light p-2 text-end">
        <button className="btn btn-outline-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰ Menu
        </button>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className={`col-md-3 bg-primary text-white p-3 vh-100 ${sidebarOpen ? 'd-block' : 'd-none'} d-md-block`}>
          <h4 className="text-center mb-4">📦 Orders Panel</h4><br/><br/>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="btn btn-outline-light w-100 mb-2" onClick={() => setActiveTab('create')}>📝 Create Order</button>
            </li><br/>
            <li className="nav-item">
              <button className="btn btn-outline-light w-100 mb-2" onClick={() => setActiveTab('list')}>📄 Order List</button>
            </li><br/>
            <li className="nav-item">
              <button className="btn btn-outline-light w-100 mb-4" onClick={() => setActiveTab('fetch')}>🔍 Fetch by ID</button>
            </li><br/><br/>
            <li className="nav-item mt-auto">
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
