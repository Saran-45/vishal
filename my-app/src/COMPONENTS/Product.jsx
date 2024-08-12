// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { updateInventory, getInventoryData } from '../Json/Db';
// import { Context } from './GlobeData';
// import './Products.css';

// const Products = () => {
//   const { updateQuantities } = useContext(Context);
//   const navigate = useNavigate();

//   const [counts, setCounts] = useState({});
//   const [products, setProducts] = useState([]);

//   const fetchInventoryData = async () => {
//     const data = await getInventoryData();
//     setProducts(data);
//     const initialCounts = data.reduce((acc, item) => {
//       acc[item.name] = item.Quantity || 0;
//       return acc;
//     }, {});
//     setCounts(initialCounts);
//   };

//   useEffect(() => {
//     fetchInventoryData();
//   }, []);

//   const handleIncrement = (product) => {
//     setCounts((prevCounts) => ({
//       ...prevCounts,
//       [product.name]: (prevCounts[product.name] || product.Quantity) + 1,
//     }));
//   };

//   const handleDecrement = (product) => {
//     setCounts((prevCounts) => ({
//       ...prevCounts,
//       [product.name]: Math.max(0, (prevCounts[product.name] || product.Quantity) - 1),
//     }));
//   };

//   const handleInputChange = (product, value) => {
//     if (value === '' || /^[0-9]+$/.test(value)) {
//       const numericValue = value === '' ? 0 : parseInt(value, 10);
//       setCounts((prevCounts) => ({
//         ...prevCounts,
//         [product.name]: numericValue,
//       }));
//     }
//   };

//   const handleSave = async (product) => {
//     const updatedProduct = {
//       id: product.id,
//       name: product.name,
//       category: product.category,
//       Quantity: counts[product.name] || 0,
//     };
//     await updateInventory(product.id, updatedProduct);
//     await fetchInventoryData(); // Refresh data to include updated quantities
//     navigate('/Inventory');
//   };

//   return (
//     <div className='products'>
//       <h1>Products In Inventory</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Quantity</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((product, index) => (
//               <tr key={index}>
//                 <td>{product.name}</td>
//                 <td>
//                   <div className='quantityControl'>
//                     <button onClick={() => handleDecrement(product)}>-</button>
//                     <input 
//                       type="number"
//                       value={counts[product.name] || product.Quantity} 
//                       onChange={(e) => handleInputChange(product, e.target.value)}
//                     />
//                     <button onClick={() => handleIncrement(product)}>+</button>
//                   </div>
//                 </td>
//                 <td>{product.category || 'Uncategorized'}</td>
//                 <td>
//                   <button onClick={() => handleSave(product)}>Save</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No products available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateInventory, getInventoryData } from '../Json/Db';
import { Context } from './GlobeData';
import './Products.css';

const Products = () => {
  const { updateQuantities } = useContext(Context);
  const navigate = useNavigate();

  const [counts, setCounts] = useState({});
  const [products, setProducts] = useState([]);

  const fetchInventoryData = async () => {
    const data = await getInventoryData();
    setProducts(data);
    const initialCounts = data.reduce((acc, item) => {
      acc[item.name] = item.quantity || 0;
      return acc;
    }, {});
    setCounts(initialCounts);
  };

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const handleIncrement = (product) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [product.name]: (prevCounts[product.name] || product.quantity) + 1,
    }));
  };

  const handleDecrement = (product) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [product.name]: Math.max(0, (prevCounts[product.name] || product.quantity) - 1),
    }));
  };

  const handleInputChange = (product, value) => {
    if (value === '' || /^[0-9]+$/.test(value)) {
      const numericValue = value === '' ? 0 : parseInt(value, 10);
      setCounts((prevCounts) => ({
        ...prevCounts,
        [product.name]: numericValue,
      }));
    }
  };

  const handleSave = async (product) => {
    const updatedProduct = {
      id: product.id,
      name: product.name,
      category: product.category,
      quantity: counts[product.name] || 0,  // Lowercase "q" to match backend
    };
    await updateInventory(product.id, updatedProduct);
    await fetchInventoryData(); // Refresh data to include updated quantities
    navigate('/Inventory');
  };

  return (
    <div className='products'>
      <h1>Products In Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>
                  <div className='quantityControl'>
                    <button onClick={() => handleDecrement(product)}>-</button>
                    <input 
                      type="number"
                      value={counts[product.name] || product.quantity} 
                      onChange={(e) => handleInputChange(product, e.target.value)}
                    />
                    <button onClick={() => handleIncrement(product)}>+</button>
                  </div>
                </td>
                <td>{product.category || 'Uncategorized'}</td>
                <td>
                  <button onClick={() => handleSave(product)}>Save</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
