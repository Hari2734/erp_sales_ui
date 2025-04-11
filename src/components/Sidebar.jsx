import React from "react";
import "../styles/Sidebar.css"; // Ensure this file exists and is correctly imported

// Icons (ensure the path to the image is correct)
import Dashboard from "../assets/images/dashboard.png"; 
import Purchase from "../assets/images/purchase.png"; 

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>ERP 系統</h2>
      <ul>
        <li className="main-item">
          <img src={Dashboard} alt="Routine Operations" />
          <span>Routine Operations</span> {/* Wrap text in a span for better structure */}
          <ul className="sub-menu">
            <li> <img src={Purchase} alt="Purchase Operation" /> 進貨作業 <span>Purchase Operation</span></li>
            <li>報價作業  <span>Quotation Operation</span></li>
            <li>廠商訂貨作業  <span>Supplier Order</span></li>
            <li>盤點作業  <span>Inventory Check</span></li>
            <li>車輛狀況記錄  <span>Vehicle Condition Record</span></li>
            <li>每日基本設定  <span>Daily Base Setting</span>s</li>
            <li>車輛加油記錄  <span>Vehicle Refueling Record</span></li>
            <li>瓦斯異動登錄  <span>Gas Stock Movement</span></li>
            <li>訊息通知  <span>Message Notification</span></li>
            <li>驗瓶資料匯入  <span>Bottle Inspection Import</span></li>
            <li>流量表登錄作業  <span>Flow Meter Entry</span></li>
            <li>調撥作業  <span>Transfer Operation</span></li>
            <li>卡車管理  <span>Truck Management</span></li>
            <li>送貨管理  <span>Delivery Management</span></li>
            <li>發票開立作業  <span>Invoice Issuance</span></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
