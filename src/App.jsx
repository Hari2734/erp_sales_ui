import React from "react";
import Sidebar from "./components/Sidebar";
import TopToolbar from "./components/TopToolbar";
import SalesForm from "./components/SalesForm";
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