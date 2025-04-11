import React from "react";
import "../styles/TopToolbar.css";
import Msystem from "../assets/images/msystem.png";

export default function TopToolbar() {
  return (
    <>
    <div className="top-toolbar">
    </div>
    <div className="header-btns">
      <button><img src={Msystem}/>管理系統</button>
      </div>
    </>
  );
}