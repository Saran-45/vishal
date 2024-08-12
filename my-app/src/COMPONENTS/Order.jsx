import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInventoryData } from '../Json/Db';
import './Order.css';

const Order = () => {
  const [result, setResult] = useState("");
  const [products, setProducts] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [supplierInfo, setSupplierInfo] = useState({
    name: '',
    email: '',
    companyName: '',
    address: '',
    contact: '',
  });

  const navigate = useNavigate(); // useNavigate instead of useHistory

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getInventoryData();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedOrderDetails = [...orderDetails];
    updatedOrderDetails[index] = {
      ...updatedOrderDetails[index],
      [field]: value,
    };
    setOrderDetails(updatedOrderDetails);
  };

  const handleAddProduct = () => {
    setOrderDetails([...orderDetails, { productName: '', quantity: '', brand: '', color: '' }]);
  };

  const handleRemoveProduct = (index) => {
    const updatedOrderDetails = orderDetails.filter((_, i) => i !== index);
    setOrderDetails(updatedOrderDetails);
  };

  const handleSupplierChange = (field, value) => {
    setSupplierInfo({ ...supplierInfo, [field]: value });
  };

  const generateReceipt = () => {
    const { name, companyName, address, contact } = supplierInfo;
    let receipt = `Order Receipt\n\nSupplier Information:\nName: ${name}\nCompany Name: ${companyName}\nAddress: ${address}\nContact: ${contact}\n\nOrder Details:\n`;

    orderDetails.forEach((detail, index) => {
      receipt += `\nProduct ${index + 1}:\n`;
      receipt += `Product Name: ${detail.productName}\n`;
      receipt += `Quantity: ${detail.quantity}\n`;
      receipt += `Brand: ${detail.brand}\n`;
      receipt += `Color: ${detail.color}\n`;
    });

    return receipt;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const newOrder = {
      productName: orderDetails[0].productName, // Updated field name to match the input field
      type: "Category", // You might need to fetch and set this based on your form
      quantity: orderDetails[0].quantity,
      orderStatus: "Pending"
    };

    try {
      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setResult("Form Submitted Successfully");
      setOrderDetails([]);
      setSupplierInfo({
        name: '',
        email: '',
        companyName: '',
        address: '',
        contact: '',
      });
      navigate(`/OrderDetails`); // useNavigate instead of useHistory

    } catch (error) {
      console.error("Failed to submit form:", error);
      setResult("Error submitting form: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Supplier Information</h2>
        <div className='formGroup'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={supplierInfo.name}
            onChange={(e) => handleSupplierChange('name', e.target.value)}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={supplierInfo.email}
            onChange={(e) => handleSupplierChange('email', e.target.value)}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='companyName'>Company Name</label>
          <input
            type='text'
            name='companyName'
            value={supplierInfo.companyName}
            onChange={(e) => handleSupplierChange('companyName', e.target.value)}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            value={supplierInfo.address}
            onChange={(e) => handleSupplierChange('address', e.target.value)}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='contact'>Contact</label>
          <input
            type='text'
            name='contact'
            value={supplierInfo.contact}
            onChange={(e) => handleSupplierChange('contact', e.target.value)}
            required
          />
        </div>

        <h2>Order Details</h2>
        {orderDetails.map((detail, index) => (
          <div key={index} className='orderDetail'>
            <div className='formGroup'>
              <label htmlFor={`productName-${index}`}>Product Name</label>
              <input
                type='text'
                value={detail.productName} // Changed from detail.name to detail.productName
                onChange={(e) => handleInputChange(index, 'productName', e.target.value)} // Changed field name
                required
              />
            </div>
            <div className='formGroup'>
              <label htmlFor={`quantity-${index}`}>Quantity</label>
              <input
                type='number'
                name={`quantity-${index}`}
                value={detail.quantity}
                onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                required
                min='1'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor={`brand-${index}`}>Brand</label>
              <input
                type='text'
                name={`brand-${index}`}
                value={detail.brand}
                onChange={(e) => handleInputChange(index, 'brand', e.target.value)}
                required
              />
            </div>
            <button type='button' onClick={() => handleRemoveProduct(index)}>
              Remove Product
            </button>
          </div>
        ))}
        <button type='button' onClick={handleAddProduct}>
          Add Product
        </button>
        <button type='submit'>Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Order;
