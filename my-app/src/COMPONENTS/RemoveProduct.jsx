import React, { useState, useEffect, useContext } from 'react';
import { getInventoryData, deleteProductFromInventory } from '../Json/Db';
import { Context } from './GlobeData';
import './RemoveProduct.css';

const RemoveProduct = () => {
  const { isAdmin } = useContext(Context);
  const [products, setProducts] = useState([]);
  console.log(products);
  

  useEffect(() => {
    const fetchInventory = async () => {
      const data = await getInventoryData();
      setProducts(data);
    };
    fetchInventory();
  }, []);

  const handleDelete = async (id) => {
    console.log(id)
    await deleteProductFromInventory(id);
    setProducts(products.filter(product => product.id !== id));
  };

  if (!isAdmin) {
    return <p>You do not have permission to remove products.</p>;
  }

  return (
    <div className="removeProduct">
      <h1>Remove Products from Inventory</h1>
      <table className="remove-product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemoveProduct;

