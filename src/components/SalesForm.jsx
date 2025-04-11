import React, { useState, useEffect } from "react";
import "../styles/SalesForm.css"; // Assuming you have a CSS file for styling
import data from "./data.json";

const SalesEntry = () => {
  const [form, setForm] = useState({
    salesOrderNo: "",
    salesDate: "2023-09-19",
    customerId: "",
    customerActualNo: "",
    paidAmount: "",
    settlementDate: "",
    warehouseId: "",
    isBorrowed: false,
    taxType: "intno",
    taxOption: "Exempt",
  });

  const [salesItem, setSalesItem] = useState({
    productId: "",
    quantity: "",
    price: 0,
    subtotal: 0,
  });

  useEffect(() => {
    const product = data.products.find((p) => p.id === salesItem.productId);
    const price = product ? product.price : "";
    const subtotal = price * salesItem.quantity;
    setSalesItem((prev) => ({ ...prev, price, subtotal }));
  }, [salesItem.productId, salesItem.quantity]);

  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (field, value) => {
    setSalesItem((prev) => ({ ...prev, [field]: value }));
  };

  const taxAmount = form.taxOption === "Added" ? salesItem.subtotal * 0.1 : 0;
  const totalAmount = salesItem.subtotal + taxAmount;
  const outstandingAmount = totalAmount - (parseFloat(form.paidAmount) || 0);

  return (
    <>
      <div className="sales-entry-container">
        <h2>銷售主檔</h2>

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
            Paid Amount
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
            預設倉庫
            <select
              value={form.warehouseId}
              onChange={(e) => handleFormChange("warehouseId", e.target.value)}
            >
              <option value="">選擇</option>
              {data.warehouses.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Installer
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

          <label className="checkbox-label">
            是否借出
            <input
              type="checkbox"
              checked={form.isBorrowed}
              onChange={(e) => handleFormChange("isBorrowed", e.target.checked)}
            />
          </label>
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
            稅額
            <input type="text" value={taxAmount.toFixed(2)} readOnly />
          </label>
          <label>
            稅別
            <select
              value={form.taxType}
              onChange={(e) => handleFormChange("taxType", e.target.value)}
            >
              <option value="intno">Intno</option>
            </select>
          </label>
        </div>

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
    </>
  );
};

export default SalesEntry;
