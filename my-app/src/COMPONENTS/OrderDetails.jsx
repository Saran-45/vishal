import React, { useState, useEffect } from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/orders`);
        const data = await response.json();
        setOrders(data);
        const statusMap = {};
        data.forEach(order => {
          statusMap[order.id] = order.orderStatus;
        });
        setStatus(statusMap);
      } catch (error) {
        console.error("Failed to fetch order details", error);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setStatus(prevStatus => ({
      ...prevStatus,
      [id]: newStatus
    }));
  };

  const updateStatus = async (id) => {
    const newStatus = status[id];
    if (newStatus === "Cancelled") {
      try {
        const response = await fetch(`http://localhost:3001/orders/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert(`Order ID ${id} has been deleted successfully`);
          setOrders(orders.filter(order => order.id !== id));
        } else {
          alert(`Failed to delete order ID ${id}`);
        }
      } catch (error) {
        console.error("Failed to delete order:", error);
      }
    } else {
      try {
        const response = await fetch(`http://localhost:3001/orders/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...orders.find(order => order.id === id),
            orderStatus: newStatus,
          }),
        });

        if (response.ok) {
          alert(`Order status for ID ${id} updated successfully`);
        } else {
          alert(`Failed to update order status for ID ${id}`);
        }
      } catch (error) {
        console.error("Failed to update order status", error);
      }
    }
  };

  if (orders.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="orders-table-container">
      <h2>All Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>{order.type}</td>
              <td>{order.quantity}</td>
              <td>
                <select
                  value={status[order.id]}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Received">Received</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td>
                <button onClick={() => updateStatus(order.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
