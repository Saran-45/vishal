// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './COMPONENTS/About.jsx';
import Contact from './COMPONENTS/Contact.jsx';
import Home from './COMPONENTS/Home.jsx';
import Login from './COMPONENTS/Login.jsx';
import Navbar from './COMPONENTS/Navbar.jsx';
import Footer from './COMPONENTS/Footer.jsx';
import Register from './COMPONENTS/Register.jsx';
import Product from './COMPONENTS/Product.jsx';
import Admin from './COMPONENTS/Admin.jsx';
import InventoryDetails from './COMPONENTS/InventoryDetails.jsx';
import Order from './COMPONENTS/Order.jsx';
import Blog from './COMPONENTS/Blog.jsx';
import Press from './COMPONENTS/Press.jsx';
import FAQ from './COMPONENTS/FAQ.jsx';
import Dashboard from './COMPONENTS/Dashboard.jsx';
import ProtectedRoute from './COMPONENTS/ProtectedRoute.jsx';
import AddProduct from './COMPONENTS/AddProduct.jsx';
import RemoveProduct from './COMPONENTS/RemoveProduct.jsx';
import OrderDetails from './COMPONENTS/OrderDetails.jsx'; // Import OrderDetails component

const App = () => {
  const location = useLocation();
  const knownRoutes = [
    '/login',
    '/register',
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/product',
    '/usermanagement',
    '/inventory',
    '/orders',
    '/blog',
    '/press',
    '/faq',
    '/dashboard',
    '/AddProduct',
    '/RemoveProduct',
    '/orderdetails/:orderId', // Add this path to known routes
  ];

  const isKnownRoute = knownRoutes.includes(location.pathname);

  return (
    <>
      <div>
        {isKnownRoute && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/usermanagement" element={<ProtectedRoute adminOnly={true}><Admin /></ProtectedRoute>} />
          <Route path="/inventory" element={<ProtectedRoute><InventoryDetails /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Order /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/press" element={<ProtectedRoute><Press /></ProtectedRoute>} />
          <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/AddProduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
          <Route path="/RemoveProduct" element={<ProtectedRoute><RemoveProduct /></ProtectedRoute>} />
          <Route path="/OrderDetails" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} /> {/* Add this route */}
        </Routes>
        {isKnownRoute && <Footer />}
      </div>
    </>
  );
};

export default App;
