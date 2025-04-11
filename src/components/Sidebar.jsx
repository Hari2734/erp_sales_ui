import React from "react";
import "../styles/Sidebar.css";

// Icons (can be replaced or extended)
import Dashboard from "../assets/images/dashboard.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>ERP 系統</h2>
      <ul>
        <li className="main-item">
          <img src={Dashboard} alt="Routine Operations" />
          Routine Operations
          <ul className="sub-menu">
            <li>進貨作業 (Purchase Operation)</li>
            <li>報價作業 (Quotation Operation)</li>
            <li>廠商訂貨作業 (Supplier Order)</li>
            <li>盤點作業 (Inventory Check)</li>
            <li>車輛狀況記錄 (Vehicle Condition Record)</li>
            <li>每日基本設定 (Daily Base Settings)</li>
            <li>車輛加油記錄 (Vehicle Refueling Record)</li>
            <li>瓦斯異動登錄 (Gas Stock Movement)</li>
            <li>訊息通知 (Message Notification)</li>
            <li>驗瓶資料匯入 (Bottle Inspection Import)</li>
            <li>流量表登錄作業 (Flow Meter Entry)</li>
            <li>調撥作業 (Transfer Operation)</li>
            <li>卡車管理 (Truck Management)</li>
            <li>送貨管理 (Delivery Management)</li>
            <li>發票開立作業 (Invoice Issuance)</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
