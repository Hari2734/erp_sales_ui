import React, { useState, useEffect } from "react";
import "../../styles/SalesForm.css"; // Import the external CSS styles
import data from "../../data/data.json"; // Import static JSON data for dropdowns

const SalesEntry = () => {
  // Form state for the main sales order
  const [form, setForm] = useState({
    salesOrderNo: "",
    salesDate: "2023-09-19",
    customerId: "",
    customerActualNo: "",
    paidAmount: "",
    settlementDate: "",
    warehouseId: "",
    isBorrowed: false,
    taxType: "內部編號",
    taxOption: "免稅",
    taxAmount: 0,
    totalAmount: 0,
    outstandingAmount: 0,
  });

  // State for a single sales item (product)
  const [salesItem, setSalesItem] = useState({
    productId: "",
    quantity: "",
    price: 0,
    subtotal: 0,
  });

  // Recalculate price and subtotal whenever productId or quantity changes
  useEffect(() => {
    // Find the selected product from the data using the selected productId
    const product = data.products.find((p) => p.id === salesItem.productId);

    // If a product is found, use its price; otherwise, set price as an empty string
    const price = product ? product.price : "";

    // Calculate subtotal as price × quantity
    const subtotal = price * salesItem.quantity;

    // Update the salesItem state with the calculated price and subtotal
    setSalesItem((prev) => ({ ...prev, price, subtotal }));

    // This effect runs every time the productId or quantity changes
  }, [salesItem.productId, salesItem.quantity]);

  // Handle changes to form inputs
  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Handle changes to sales item fields
  const handleItemChange = (field, value) => {
    setSalesItem((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate dynamic financial values
  const taxAmount = form.taxOption === "Added" ? salesItem.subtotal * 0.1 : 0;
  const totalAmount = salesItem.subtotal + taxAmount;
  const outstandingAmount = totalAmount - (parseFloat(form.paidAmount) || 0);

  return (
    <>
      <div className="sales-entry-container">
        <h2>銷售主檔</h2>

        {/* Sales form input fields */}
        <div className="form-grid">
          <label>
            銷售單號
            <input
              type="text"
              value={form.salesOrderNo}
              onChange={(e) => handleFormChange("salesOrderNo", e.target.value)}
            />
          </label>

          <label>
            銷售日期
            <input
              type="date"
              value={form.salesDate}
              onChange={(e) => handleFormChange("salesDate", e.target.value)}
            />
          </label>

          <label>
            客戶編號
            <select
              value={form.customerId}
              onChange={(e) => handleFormChange("customerId", e.target.value)}
            >
              <option value="">選擇</option>
              {data.customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            客戶實號
            <input
              type="text"
              value={form.customerActualNo}
              onChange={(e) =>
                handleFormChange("customerActualNo", e.target.value)
              }
            />
          </label>

          <label>
            未稅小計
            <input type="text" value={salesItem.subtotal.toFixed(2)} readOnly />
          </label>

          <label>
            稅額
            <input type="text" value={taxAmount.toFixed(2)} readOnly />
          </label>

          <label>
            金額合計
            <input type="text" value={totalAmount.toFixed(2)} readOnly />
          </label>

          <label>
            已付金額
            <input
              type="text"
              value={form.paidAmount}
              onChange={(e) => handleFormChange("paidAmount", e.target.value)}
            />
          </label>

          <label>
            未結金額
            <input type="text" value={outstandingAmount.toFixed(2)} readOnly />
          </label>

          <label>
            結清日期
            <input
              type="date"
              value={form.settlementDate}
              onChange={(e) =>
                handleFormChange("settlementDate", e.target.value)
              }
            />
          </label>

          <label>
            {/* Label text for the dropdown, showing both Chinese and English */}
            預設倉庫 (Warehouse)
            {/* Dropdown to select a warehouse */}
            <select
              value={form.warehouseId} // Binds the selected value to form.warehouseId
              onChange={(e) => handleFormChange("warehouseId", e.target.value)} // Updates form.warehouseId on change
            >
              {/* Default option prompting user to choose */}
              <option value="">選擇</option>

              {/* Dynamically render options from the warehouses data */}
              {data.warehouses.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name} {/* Display the warehouse name */}
                </option>
              ))}
            </select>
          </label>

          <label>
            安裝人員
            <select
              value={form.installerId}
              onChange={(e) => handleFormChange("installerId", e.target.value)}
            >
              <option value="">選擇</option>
              {data.salespersons.map((sp) => (
                <option key={sp.id} value={sp.id}>
                  {sp.name}
                </option>
              ))}
            </select>
          </label>

          {/* Borrowed checkbox */}
          <label className="checkbox-label">
            是否借出
            <input
              type="checkbox"
              checked={form.isBorrowed}
              onChange={(e) => handleFormChange("isBorrowed", e.target.checked)}
            />
          </label>

          {/* Tax option radio buttons */}
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="taxOption"
                checked={form.taxOption === "Exempt"}
                onChange={() => handleFormChange("taxOption", "Exempt")}
              />{" "}
              免稅
            </label>
            <label>
              <input
                type="radio"
                name="taxOption"
                checked={form.taxOption === "Added"}
                onChange={() => handleFormChange("taxOption", "Added")}
              />{" "}
              外加
            </label>
            <label>
              <input
                type="radio"
                name="taxOption"
                checked={form.taxOption === "Incl."}
                onChange={() => handleFormChange("taxOption", "Incl.")}
              />{" "}
              內含
            </label>
          </div>

          <label>
            稅別
            <select
              value={form.taxType}
              onChange={(e) => handleFormChange("taxType", e.target.value)}
            >
              <option value="intno">內部編號</option>
            </select>
          </label>
        </div>

        {/* Sales detail section */}
        <h3>銷售明細</h3>
        <table className="sales-table">
          <thead>
            <tr>
              <th>產品編號</th>
              <th>單價</th>
              <th>數量</th>
              <th>小計</th>
              <th>單位</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* Product selection dropdown */}
                <select
                  value={salesItem.productId}
                  onChange={(e) =>
                    handleItemChange("productId", e.target.value)
                  }
                >
                  <option value="">選擇</option>
                  {data.products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>{salesItem.price || "0.00"}</td>
              <td>
                <input
                  type="number"
                  value={salesItem.quantity || ""}
                  onChange={(e) =>
                    handleItemChange("quantity", parseInt(e.target.value) || 0)
                  }
                  min="0"
                  disabled={!salesItem.productId}
                />
              </td>
              <td>{salesItem.subtotal.toFixed(2)}</td>
              <td>
                {data.products.find((p) => p.id === salesItem.productId)
                  ?.unit || "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer buttons */}
      <div className="footer-button-group">
        <button className="btn btn-primary">
          <span className="material-symbols-outlined">add_circle</span>
          新增
        </button>
        <button className="btn btn-warning">
          <span className="material-symbols-outlined">save</span>
          儲存
        </button>
        <button className="btn btn-danger">
          <span className="material-symbols-outlined">delete</span>
          刪除
        </button>
        <button className="btn btn-success">
          <span className="material-symbols-outlined">print</span>
          列印
        </button>
      </div>
    </>
  );
};

export default SalesEntry;
