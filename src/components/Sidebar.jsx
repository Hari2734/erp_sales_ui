import React from "react";
import "../styles/Sidebar.css"; // Ensure this file exists and is correctly imported

// Icons (ensure the path to the image is correct)
import Dashboard from "../assets/images/dashboard.png"; 
import Purchase from "../assets/images/purchase.png"; 
import Quotation from "../assets/images/quotation.png"; 
import Supplier from "../assets/images/supplier.png"; 
import Inventory from "../assets/images/inventory.png"; 
import Vehicle from "../assets/images/vehicle.png"; 
import Settings from "../assets/images/settings.png"; 
import Notification from "../assets/images/notification.png"; 
import Vehiclefuel from "../assets/images/vehiclefuel.png"; 
import Gas from "../assets/images/gas.png"; 
import Bottle from "../assets/images/bottle.png"; 
import Flowmeter from "../assets/images/flowmeter.png";  
import Transfer from "../assets/images/transfer.png"; 
import Truck from "../assets/images/truck.png"; 
import Delivery from "../assets/images/delivery.png"; 
import Invoice from "../assets/images/invoice.png"; 


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
            <li><img src={Quotation} alt="Quotation Operation" /> 報價作業  <span>Quotation Operation</span></li>
            <li><img src={Supplier} alt="Supplier Order" /> 廠商訂貨作業  <span>Supplier Order</span></li>
            <li><img src={Inventory} alt="Inventory Check" /> 盤點作業  <span>Inventory Check</span></li>
            <li><img src={Vehicle} alt="Vehicle Condition Record" /> 車輛狀況記錄  <span>Vehicle Condition Record</span></li>
            <li><img src={Settings} alt="Daily Base Setting" /> 每日基本設定  <span>Daily Base Setting</span>s</li>
            <li><img src={Vehiclefuel} alt="Vehicle Refueling Record" /> 車輛加油記錄  <span>Vehicle Refueling Record</span></li>
            <li><img src={Gas} alt="Gas Stock Movement" /> 瓦斯異動登錄  <span>Gas Stock Movement</span></li>
            <li><img src={Notification} alt="Message Notification" /> 訊息通知  <span>Message Notification</span></li>
            <li><img src={Bottle} alt="Bottle Inspection Import" /> 驗瓶資料匯入  <span>Bottle Inspection Import</span></li>
            <li><img src={Flowmeter} alt="Flow Meter Entry" /> 流量表登錄作業  <span>Flow Meter Entry</span></li>
            <li><img src={Transfer} alt="Transfer Operation" /> 調撥作業  <span>Transfer Operation</span></li>
            <li><img src={Truck} alt="Truck Management" /> 卡車管理  <span>Truck Management</span></li>
            <li><img src={Delivery} alt="Delivery Management" /> 送貨管理  <span>Delivery Management</span></li>
            <li><img src={Invoice} alt="Invoice Issuance" /> 發票開立作業  <span>Invoice Issuance</span></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
