import React from "react";
import "../styles/TopToolbar.css";

export default function TopToolbar() {
  return (
    <div className="top-toolbar">
      <button>New</button>
      <button>Save</button>
      <button>Delete</button>
      <button>Print</button>
    </div>
  );
}