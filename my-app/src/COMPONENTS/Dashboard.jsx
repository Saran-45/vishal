import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Invenzen Admin Dashboard! Here you can manage users, orders, and inventory effectively.</p>
      
      <div className='dashboard-nav'>
        <Link to='/UserManagement' className='dashboard-link'>User Management</Link>
        {<Link to='/Orders' className='dashboard-link'>Orders</Link>}
        <Link to='/Inventory' className='dashboard-link'>Inventory Details</Link>
        <Link to='/AddProduct' className='dashboard-link'>Add Product</Link>
        <Link to='/RemoveProduct' className='dashboard-link'>Remove Product</Link>
        <Link to='/OrderDetails' className='dashboard-link'>OrderDetails</Link>
      </div>
      
      <div className='dashboard-overview'>
        <h2>Overview</h2>
        <p>Manage your inventory efficiently with Invenzen's comprehensive tools. Ensure your stock levels are optimal and never miss an order with our automated systems.</p>
        <p><strong>User Management:</strong> Add, edit, and manage user roles and permissions.</p>
        <p><strong>Orders:</strong> View and process customer orders seamlessly.</p>
        <p><strong>Inventory Details:</strong> Keep track of all your products and their quantities.</p>
        <p><strong>Add Product:</strong> Add new products to your inventory easily.</p>
        <p><strong>Remove Product:</strong> Remove outdated or out-of-stock products from your inventory.</p>
      </div>
    </div>
  );
};

export default Dashboard;
