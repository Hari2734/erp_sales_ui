import React from "react";
import Sidebar from "./components/layout/Sidebar";
import TopToolbar from "./components/layout/TopToolbar";
import SalesForm from "./components/sales/SalesForm";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-panel">
        <TopToolbar />
        <div className="content">
          <SalesForm />
        </div>
      </div>
    </div>
  );
}