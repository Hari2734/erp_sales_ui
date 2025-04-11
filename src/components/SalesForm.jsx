import React, { useState, useEffect } from 'react';
import '../styles/ErpSales.css'; // Assuming you have a CSS file for styling
import data from './data.json';

const SalesEntry = () => {
  const [form, setForm] = useState({
    salesOrderNo: '',
    salesDate: '2023-09-19',
    customerId: '',
    customerActualNo: '',
    paidAmount: '',
    settlementDate: '',
    warehouseId: '',
    isBorrowed: false,
    taxType: 'intno',
    taxOption: 'Exempt',
  });

  const [salesItem, setSalesItem] = useState({
    productId: '',
    quantity: 0,
    price: 0,
    subtotal: 0,
  });

  useEffect(() => {
    const product = data.products.find(p => p.id === salesItem.productId);
    const price = product ? product.price : 0;
    const subtotal = price * salesItem.quantity;
    setSalesItem(prev => ({ ...prev, price, subtotal }));
  }, [salesItem.productId, salesItem.quantity]);

  const handleFormChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (field, value) => {
    setSalesItem(prev => ({ ...prev, [field]: value }));
  };

  const taxAmount = form.taxOption === 'Added' ? salesItem.subtotal * 0.1 : 0;
  const totalAmount = salesItem.subtotal + taxAmount;
  const outstandingAmount = totalAmount - (parseFloat(form.paidAmount) || 0);

  return (
    <div className="sales-entry-container">
      <h2>Sales Entry</h2>

      <div className="form-grid">
        <label>
          Sales Order No.
          <input type="text" value={form.salesOrderNo} onChange={e => handleFormChange('salesOrderNo', e.target.value)} />
        </label>
        <label>
          Sales Date
          <input type="date" value={form.salesDate} onChange={e => handleFormChange('salesDate', e.target.value)} />
        </label>
        <label>
          Customer Code
          <select value={form.customerId} onChange={e => handleFormChange('customerId', e.target.value)}>
            <option value="">Select</option>
            {data.customers.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
        <label>
          Customer Actual No.
          <input type="text" value={form.customerActualNo} onChange={e => handleFormChange('customerActualNo', e.target.value)} />
        </label>
        <label>
          Subtotal (Tax Excluded)
          <input type="text" value={salesItem.subtotal.toFixed(2)} readOnly />
        </label>
        <label>
          Tax Amount
          <input type="text" value={taxAmount.toFixed(2)} readOnly />
        </label>
        <label>
          Total Amount
          <input type="text" value={totalAmount.toFixed(2)} readOnly />
        </label>
        <label>
          Paid Amount
          <input type="text" value={form.paidAmount} onChange={e => handleFormChange('paidAmount', e.target.value)} />
        </label>
        <label>
          Outstanding Amount
          <input type="text" value={outstandingAmount.toFixed(2)} readOnly />
        </label>
        <label>
          Settlement Date
          <input type="date" value={form.settlementDate} onChange={e => handleFormChange('settlementDate', e.target.value)} />
        </label>
        <label>
          Default Warehouse
          <select value={form.warehouseId} onChange={e => handleFormChange('warehouseId', e.target.value)}>
            <option value="">Select</option>
            {data.warehouses.map(w => (
              <option key={w.id} value={w.id}>{w.name}</option>
            ))}
          </select>
        </label>
        <label className="checkbox-label">
          Loaned Out?
          <input type="checkbox" checked={form.isBorrowed} onChange={e => handleFormChange('isBorrowed', e.target.checked)} />
        </label>
        <div className="radio-group">
          <label><input type="radio" name="taxOption" checked={form.taxOption === 'Exempt'} onChange={() => handleFormChange('taxOption', 'Exempt')} /> Exempt</label>
          <label><input type="radio" name="taxOption" checked={form.taxOption === 'Added'} onChange={() => handleFormChange('taxOption', 'Added')} /> Added</label>
          <label><input type="radio" name="taxOption" checked={form.taxOption === 'Incl.'} onChange={() => handleFormChange('taxOption', 'Incl.')} /> Incl.</label>
        </div>
        <label>
          Taxamnt
          <input type="text" value={taxAmount.toFixed(2)} readOnly />
        </label>
        <label>
          Tax Type
          <select value={form.taxType} onChange={e => handleFormChange('taxType', e.target.value)}>
            <option value="intno">Intno</option>
          </select>
        </label>
      </div>

      <h3>Sales Details</h3>
      <table className="sales-table">
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
      <div className="footer-button-group">
        <button className="btn btn-primary">
          <span className="material-symbols-outlined">add_circle</span>
          New
        </button>
        <button className="btn btn-warning">
          <span className="material-symbols-outlined">save</span>
          Save
        </button>  
        <button className="btn btn-danger">
          <span className="material-symbols-outlined">delete</span>
          Delete
        </button>
        <button className="btn btn-success">
          <span className="material-symbols-outlined">print</span>
          Print
        </button>
      </div>
    </div>
  );
};

export default SalesEntry;
