import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login / Register</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
