import React from "react";
import "../styles/TopToolbar.css";

export default function TopToolbar() {
  return (
    <div className="top-toolbar">
      <button className="btn btn-primary">
        <span class="material-symbols-outlined">
          add_circle
        </span>New</button>
      <button className="btn btn-warning">
        <span class="material-symbols-outlined">
          save
        </span>
        Save</button>
      <button className="btn btn-danger">
        <span class="material-symbols-outlined">
          delete
        </span>
        Delete</button>
      <button className="btn btn-success">
        <span class="material-symbols-outlined">
          print
        </span>
        Print</button>
    </div>
  );
}