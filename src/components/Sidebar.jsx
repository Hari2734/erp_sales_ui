import React from "react";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>ERP Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Sales Entry</li>
        <li>Customers</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}