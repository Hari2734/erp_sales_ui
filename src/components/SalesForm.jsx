// import React from "react";
// import "../styles/SalesForm.css";

// export default function SalesForm() {
//   return (
//     <div className="sales-form">
//       <h2>Sales Entry</h2>
//       <form>
//         <div className="form-group">
//           <label>Customer Name</label>
//           <input type="text" placeholder="Enter customer name" />
//         </div>
//         <div className="form-group">
//           <label>Invoice No</label>
//           <input type="text" placeholder="Enter invoice number" />
//         </div>
//         <div className="form-group">
//           <label>Date</label>
//           <input type="date" />
//         </div>
//         <div className="form-group">
//           <label>Amount</label>
//           <input type="number" placeholder="Enter amount" />
//         </div>
//         <div className="form-actions">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import '../styles/ErpSales.css'; // Assuming you have a CSS file for styling
import data from './data.json';

const SalesForm = () => {
  // State for form fields
  const [form, setForm] = useState({
    customerId: '',
    salespersonId: '',
    installerId: '',
    warehouseId: '',
    isBorrowed: false,
  });

  // State for sales item
  const [salesItem, setSalesItem] = useState({
    productId: '',
    quantity: 0,
    price: 0,
    subtotal: 0,
  });

  // Update price and subtotal when product or quantity changes
  useEffect(() => {
    const product = data.products.find(p => p.id === salesItem.productId);
    const price = product ? product.price : 0;
    const subtotal = price * salesItem.quantity;
    setSalesItem(prev => ({ ...prev, price, subtotal }));
  }, [salesItem.productId, salesItem.quantity]);

  // Handle input changes for form fields
  const handleFormChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  // Handle changes in sales item row
  const handleItemChange = (field, value) => {
    setSalesItem(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="erp-sales-container">
      <h2>Sales Entry</h2>

      <div className="form-section">
        <label>Customer:
          <select value={form.customerId} onChange={e => handleFormChange('customerId', e.target.value)}>
            <option value="">Select</option>
            {data.customers.map(customer => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </select>
        </label>

        <label>Salesperson:
          <select value={form.salespersonId} onChange={e => handleFormChange('salespersonId', e.target.value)}>
            <option value="">Select</option>
            {data.salespersons.map(sp => (
              <option key={sp.id} value={sp.id}>{sp.name}</option>
            ))}
          </select>
        </label>

        <label>Installer:
          <select value={form.installerId} onChange={e => handleFormChange('installerId', e.target.value)}>
            <option value="">Select</option>
            {data.salespersons.map(sp => (
              <option key={sp.id} value={sp.id}>{sp.name}</option>
            ))}
          </select>
        </label>

        <label>Default Warehouse:
          <select value={form.warehouseId} onChange={e => handleFormChange('warehouseId', e.target.value)}>
            <option value="">Select</option>
            {data.warehouses.map(w => (
              <option key={w.id} value={w.id}>{w.name}</option>
            ))}
          </select>
        </label>

        <label>Is Borrowed:
          <input type="checkbox" checked={form.isBorrowed} onChange={e => handleFormChange('isBorrowed', e.target.checked)} />
        </label>
      </div>

      <div className="table-section">
        <h3>Sales Details</h3>
        <table>
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select value={salesItem.productId} onChange={e => handleItemChange('productId', e.target.value)}>
                  <option value="">Select</option>
                  {data.products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </td>
              <td>{salesItem.price}</td>
              <td>
                <input
                  type="number"
                  value={salesItem.quantity}
                  onChange={e => handleItemChange('quantity', parseInt(e.target.value) || 0)}
                  min="0"
                />
              </td>
              <td>{salesItem.subtotal.toFixed(2)}</td>
              <td>{data.products.find(p => p.id === salesItem.productId)?.unit || ''}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesForm;
