import React from "react";
import "../styles/Sidebar.css";
import Dashboard from "../assets/images/dashboard.png";
import Sales from "../assets/images/sales.png";
import Customers from"../assets/images/customers.png";
import Reports from "../assets/images/reports.png";
import Settings from "../assets/images/settings.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>ERP</h2>
      <ul>
        <li> <img src={Dashboard}/> Dashboard</li>
        <li> <img src={Sales}/> Sales Entry</li>
        <li> <img src={Customers}/> Customers</li>
        <li> <img src={Reports}/> Reports</li>
        <li> <img src={Settings}/> Settings</li>
      </ul>
    </div>
  );
}